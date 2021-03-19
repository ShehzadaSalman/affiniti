const GalleryForm = () => {
    return (<>
        <h1 className="heading mb-2">Gallery</h1>
        <p className="description">
            This is an important part of the asset profile. Upload a selection of quality photos of your property here to attract investors
          </p>
        <form className="mt-5">
            <div className="input-form-group mb-5">
                <label className="input-title-style">Folder Name</label>
                <input type="text" name="name" defaultValue="Afiniti" className="input-style" />
            </div>
        </form>

    </>)
}
export default GalleryForm