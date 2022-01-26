import '../styles/layout/header.scss';
import Logo from '../images/logo-gold.png';

const Header = () => {
  return (
    <header className="header">
      <img className="header__logo" src={Logo} title="Harry Potter" alt="Logo de Harry Potter" />
      {/* <h1>El buscador de personajes de Harry Potter</h1> */}
    </header>
  )
}

export default Header;