import { NavLink } from 'react-router-dom';
import '../style/index.css';
import Logo from '../assets/logoHeader.png';

function Header() {
  return (
    <div className="header">
      <img src={Logo} alt="Logo Kasa" />
      <nav className="header__nav">
        <NavLink to="/" end>Accueil</NavLink>
        <NavLink to="/about">A propos</NavLink>
      </nav>
    </div>
  );
}

export default Header;
