const RevenueDetails = () => {
    return (<>
        <h1 className="heading mb-2">Revenue Details</h1>
        <p className="description">
            Show investors your conditions defining the entry threshold and the desired, achievable result you want to arrive at
          </p>
        <form className="mt-5">
            <div className="input-form-group mb-5">
                <label className="input-title-style">Asset Title</label>
                <input type="text" name="name" defaultValue="St Regis Aspen Repot" className="input-style" />
            </div>
            <div className="input-form-group mb-5">
                <label className="input-title-style">Description (max. 72 symbols)</label>
                <input type="text" name="name" defaultValue="London prime residential assets portfolio" className="input-style" />
            </div>
            <div className="input-form-group mb-5">
                <label className="input-title-style">Asset Location</label>
                <select className="input-style">
                    <option>London</option>
                    <option>Italy</option>
                    <option>New York</option>
                    <option>Tokyo</option>
                </select>
            </div>
            <div className="two-fields mb-5">
                <div className="input-form-group pr-2">
                    <label className="input-title-style">Minimum investment amount</label>
                    <input type="text" name="name" defaultValue="$50,000" className="input-style" />
                </div>
                <div className="input-form-group pl-2">
                    <label className="input-title-style">Capital stack</label>
                    <input type="text" name="name" defaultValue="$3,000,000" className="input-style" />
                </div>
            </div>
            <div className="two-fields mb-5">
                <div className="input-form-group pr-2">
                    <label className="input-title-style">Soft Cap</label>
                    <input type="text" name="name" defaultValue="$5,000,000" className="input-style" />
                </div>
                <div className="input-form-group pl-2">
                    <label className="input-title-style">Hard Cap</label>
                    <input type="text" name="name" defaultValue="$15,000,000" className="input-style" />
                </div>
            </div>
        </form>

    </>)

}

export default RevenueDetails;