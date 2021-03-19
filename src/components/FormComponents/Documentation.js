const DocumentationForm = () => {
    return (<>
        <h1 className="heading mb-2">Documentation</h1>
        <p className="description">
            We also don’t like unnecessary bureaucracy but by law we are obliged to check your documentation before publishing
          </p>
        <form className="mt-5">
            <div className="input-form-group mb-5">
                <label className="input-title-style">Folder Name</label>
                <input type="text" name="name" defaultValue="Afiniti" className="input-style" />
            </div>
        </form>
    </>)
}
export default DocumentationForm