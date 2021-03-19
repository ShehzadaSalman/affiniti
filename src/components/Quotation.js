const Quotation = () => {
    return (
        <div className="outer-wrapper mt-5">
            <div className="wrapper p-4">
                <div className="semicolon-wrapper">
                    <img alt="img" src="/images/semicolon.svg" />

                </div>
                <img className="quotation-shadow-img" alt="img" src="/images/shadow-quotation.svg" />
                <p className="mt-3 mb-3"> Streamlined access, data-driven investments, liquidity, powered by the blockchain — all of these is about Afiniti
                </p>
                <h4>Sarfraz Shaukat</h4>
                <span>Team Affiniti</span>

            </div>
            <style jsx>
                {`
                   .outer-wrapper{
                    position: relative;
                }
                .outer-wrapper .semicolon-wrapper{
                    padding: 15px;
                    position: absolute;
                    background: #FFFFFF;
                    box-shadow: 16px 12px 56px rgba(11, 29, 46, 0.15);
                    border-radius: 3px;
                    top: -20px;
                    left:-20px;
                    z-index: 2;

                }
             
              .wrapper{
                  background: #FFFFFF;
                  box-shadow: 0px 8px 20px rgba(3, 17, 6, 0.03);
                  border-radius: 4px;
                 
              }
              .wrapper .quotation-shadow-img{
                  position: absolute;
                  top: -3px;
                  left: 0;
              }
                 .wrapper p{
                  color: #A4AEB4;
                  font-family: Montserrat;
                  font-style: italic;
                  font-weight: 500;
                  font-size: 16px;
                  line-height: 24px;
                  letter-spacing: 0.02em;
                }
               .wrapper h4{
                font-family: Montserrat Alternates;
                font-style: normal;
                font-weight: 600;
                font-size: 16px;
                width: 100%;
                line-height: 24px;
                letter-spacing: 0.02em;

               }
               .wrapper span{
                display: block;
                font-family: Montserrat;
                font-style: normal;
                font-weight: 500;
                font-size: 14px;
                line-height: 20px;
                letter-spacing: 0.02em;
                color: #A4AEB4;
               }   
            
            
            `}
            </style>
        </div>

    )
}
export default Quotation