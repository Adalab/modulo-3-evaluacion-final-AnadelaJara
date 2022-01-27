const ResetBtn = (props) => {
  const handleClick = (event) => {
    props.resetBtn(event);
  };
  return (
    <button className='btn'
      onClick={handleClick} >
      Borrar  <i className="fas fa-broom"></i>
    </button >

  )
}
export default ResetBtn;

