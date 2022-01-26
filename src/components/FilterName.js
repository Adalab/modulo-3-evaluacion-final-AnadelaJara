const FilterName = (props) => {
  const handleInput = (ev) => {
    props.handleFilter({
      key: 'name',
      value: ev.currentTarget.value,
    });
  }
  return (
    <>
      <label className="filterName" htmlFor="name">Busca por bruja o mago:</label>
      <input type="text"
        className="filterName__input"
        name="name"
        id="name"
        onChange={handleInput}
        value={props.filterName}
      />
    </>
  )
}

export default FilterName;