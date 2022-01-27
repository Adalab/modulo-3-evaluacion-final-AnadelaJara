const FilterHouse = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      key: 'house',
      value: ev.currentTarget.value,
    })
  }
  return (
    <>
      <label className="filterHouse" htmlFor="house">Selecciona la casa:</label>
      <select name="house"
        className="filterHouse__select"
        id="house"
        onChange={handleChange}
        value={props.filterHouse}
      >
        <option value="gryffindor">Gryffindor</option>
        <option value="hufflepuff">Hufflepuff</option>
        <option value="ravenclaw">Ravenclaw</option>
        <option value="slytherin">Slytherin</option>
      </select>

    </>
  )
}

export default FilterHouse;