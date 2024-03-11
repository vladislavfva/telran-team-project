import classes from './Footer.module.css'
import { InstagramIcon, WhatsappIcon } from './FooterIcons';
import { Link } from 'react-router-dom';

function Footer() {
  return (<footer className='container'>
  <h2>Contact</h2>
  <address>
    <div>
      <p>Phone</p>
      <a className={classes.heading} href="tel:+499999999999">+49 999 999 99 99</a>
    </div>
    <div>
      <p>Socials</p>
      <div className={classes.icons}>
        <Link to='https://www.apple.com/' target="_blank">
          <InstagramIcon /> 
        </Link>
        <Link to='https://www.apple.com/' target="_blank">
          <WhatsappIcon />
        </Link>
      </div>
    </div>
    <div>
      <p>Address</p>
      <p className={classes.heading}>Linkstraße 2, 8 OG, 10785, Berlin, Deutschland</p>
    </div>
    <div>
      <p>Working Hours</p>
      <p className={classes.heading}>24 hours a day</p>
    </div>
  </address>
  <div className={classes.map}>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.410460816817!2d13.372521313046862!3d52.507910471941436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851cbdd6cfe0f%3A0xb4b0903f299decf1!2sLinkstra%C3%9Fe%202%2F8.%20Etage%2C%2010785%20Berlin!5e0!3m2!1sen!2sde!4v1709758192276!5m2!1sen!2sde" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
  </div>
  </footer>);
}

export default Footer;