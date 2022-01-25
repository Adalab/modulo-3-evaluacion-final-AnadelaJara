const FilterName = (props) => {
  const handleInput = (ev) => {
    props.handleFilter({
      key: 'name',
      value: ev.currentTarget.value,
    });
  }
  return (
    <>
      <label htmlFor="name">Busca por personaje:</label>
      <input type="text"
        name="name"
        id="name"
        onChange={handleInput}
        value={props.filterName}
      />
    </>
  )
}

export default FilterName;