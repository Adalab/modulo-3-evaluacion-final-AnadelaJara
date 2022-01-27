import FilterHouse from "./FilterHouse";
import FilterName from "./FilterName";
import ResetBtn from "./ResetBtn";

const Filters = (props) => {
  return (
    <section >
      <form className="filter__container" onSubmit={(ev) => ev.preventDefault}>
        <FilterName handleFilter={props.handleFilter} filterName={props.filterName} />
        <FilterHouse handleFilter={props.handleFilter} filterHouse={props.filterHouse} />
        <ResetBtn resetBtn={props.resetBtn} />
      </form>
    </section>
  )
}
export default Filters;