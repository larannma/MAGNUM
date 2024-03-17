import './Footer.css';
import magnumLogo from '../../img/M-letter.png';
import footer_decor from '../../img/decor-footer.png'

function Footer() {
  return (
    <div className="footer">
      <img src={footer_decor} className='footer__decor' alt='decoration'/>
      <div className='footer__container'>
        <img className='footer__img-logo' src={magnumLogo} alt='буква М'/>
        <div className='footer__contacts'>
          <p>КОНТАКТЫ</p>
          <p>8 900 900 55 55</p>
          <p>MOSCOW</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
