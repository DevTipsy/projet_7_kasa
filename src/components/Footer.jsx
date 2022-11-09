import '../style/index.css';
import Logo from '../assets/logoFooter.png';

function Footer() {
  return (
    <div className="footer">
      <img src={Logo} alt="Logo Kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  );
}

export default Footer;
