const NavElement = ({ title, finished }) => (
    <> <div className="nav-element mb-3" style={{ display: 'flex' }}>
        {finished
            ? <><img className="" src="/images/completedsection.svg"></img><h2 style={{ color: '#fff' }} className="ml-3" >{title}</h2> </>
            : <><img className="" src="/images/uncompletedsection.svg"></img><h2 style={{ color: '#fff', opacity: 0.5 }} className="ml-3" >{title}</h2> </>
        }


        <style>
            {`
            .nav-element h2{
                font-family: 'Montserrat Alternates', sans-serif; 
                font-weight: bold;
                color: #fff;
                font-size: 19px;
                line-height: 24px;
                letter-spacing: 0.02em;
            }
         
         
         `}
        </style>
    </div>
    </>
)

export default NavElement