import FormNavigation from './components/FormNavigationList'
import Quotation from './components/Quotation'
import AssetDetails from './components/FormComponents/AssetDetails'
import RevenueDetails from './components/FormComponents/RevenueDetails'
import GalleryForm from './components/FormComponents/Gallery'
import DocumentationForm from './components/FormComponents/Documentation'
import { useState } from 'react'
import SuccessPage from './components/SuccessPage'


function App() {
  const [activeForm, setActiveForm] = useState(1);
  const [formCompleted, setFormCompleted] = useState(false);
  const [assetSection, setAssetSection] = useState(false)
  const [revenueSection, setRevenueSection] = useState(false)
  const [documentationSection, setDocumentationSection] = useState(false)
  const [gallerySection, setGallerySection] = useState(false)

  // display the active form 
  const ActiveForm = () => {
    if (activeForm === 1) {
      return <AssetDetails />;
    } else if (activeForm === 2) {
      return <RevenueDetails />
    } else if (activeForm === 3) {
      return <DocumentationForm />
    }
    else if (activeForm === 4) {
      return <GalleryForm />
    }
    else {
      return <AssetDetails />;
    }

  }

  // next form 
  const nextForm = () => {
    if (activeForm === 1) {
      setActiveForm(2)
      setAssetSection(true)
    }
    else if (activeForm === 2) {
      setActiveForm(3)
      setRevenueSection(true)

    } else if (activeForm === 3) {
      setActiveForm(4)
      setDocumentationSection(true)
    }
    else {

    }

  }


  // Submit the form
  const formSubmit = () => {
    setFormCompleted(true)
  }



  // previous form
  const prevForm = () => {

    if (activeForm === 1) {

    }
    else if (activeForm === 2) {
      setActiveForm(1)
      setAssetSection(false)
    }
    else if (activeForm === 3) {
      setActiveForm(2)
      setRevenueSection(false)

    } else if (activeForm === 4) {
      setActiveForm(3)
      setDocumentationSection(false)
    }
    else {

    }
  }
  if (formCompleted) return <SuccessPage />

  return (
    <div className="main-wrapper">
      <div className="sidebar">
        <h1 style={{ color: '#fff' }} className="m-5">Affiniti</h1>
        <div className="navigation-wrapper m-5">
          <FormNavigation
            asset={assetSection}
            revenue={revenueSection}
            documents={documentationSection}
            gallery={gallerySection}
          />
          <Quotation />
        </div>
      </div>
      <div className="main-content">



        {/* main content header  */}
        <div style={{ display: 'flex', justifyContent: 'space-between' }} className="pl-5 pr-5 form-top-bar">
          <h2 className="step-heading">
            STEP {activeForm} OF 4
          </h2>
          <h2 className="trouble-heading">
            Lost or have trouble?
            <span>Get Help <img src="/images/frontarrow-blue.svg"  alt = "img" className="ml-1 mr-1" /></span>
          </h2>

        </div>





        {/* Form Section   */}
        <div className="form-section pl-5 mt-5 pr-5">
          {/* Display the active form */}
          {ActiveForm()}
          <div className="form-action-container mt-4">
            <div className="back-btn" onClick={prevForm}>
              <img src="images/back-arrow.svg" alt="back arrow" className="mt-1 mr-2" />
              <a>
                {activeForm === 1
                  ? 'Back to the home page'
                  : 'Back to the previous step'}

              </a>
            </div>

            <div style={{ display: 'flex' }}>
              <button className="secondary-btn ml-3 mr-3">Skip For Now</button>
              {activeForm === 4
                ? <button className="primary-btn" onClick={formSubmit}>Proceed to confirm <img src="/images/white-arrow.svg" className="ml-2 mb-1" alt="front arrow" /></button>
                : <button className="primary-btn" onClick={nextForm}>Next Step <img src="/images/white-arrow.svg" className="ml-2 mb-1" alt="front arrow" /></button>
              }

            </div>

          </div>
        </div>




        {/* form section ends here */}

      </div>

    </div >
  );
}

export default App;
