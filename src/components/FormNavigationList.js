import NavElement from './NavigationElement'
const FormNavigation = (props) => {
    return (<>
        <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
            <li><NavElement title="Asset details" finished={props.asset} /></li>
            <li><NavElement title="Revenue details" finished={props.revenue} /></li>
            <li><NavElement title="Documentation" finished={props.documents} /></li>
            <li><NavElement title="Gallery" finished={props.gallery} /></li>
        </ul>

    </>
    )
}
export default FormNavigation