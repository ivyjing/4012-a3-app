import './styles.css'

export const Search = (props) => {
    return (
        <input className="search-input" name="search" placeholder="Search is not available.."
        type="text" onChange={props.handleSearchUpdate} />
    )
}