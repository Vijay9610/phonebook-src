const Filter = ({filter, setFilter}) => {
    const onFilterChange = (event) => {
        setFilter(event.target.value)
    }
    return(
        <form>
            <div>
                filter shown with <input value={filter} onChange={onFilterChange}/>
            </div>
        </form>
    )
}

export default Filter