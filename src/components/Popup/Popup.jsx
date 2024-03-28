import classes from './Popup.module.css'
import CloseIcon from './PopupIcons';

function Popup({isActive, onClose}) {
  if(isActive){
    return ( <div className={classes.popup} onClick={onClose}>
      <div className={classes.popup_card}>
        <p className={classes.title}>Congratulations!</p>
        <p>Your order has been successfully placed on the website.</p>
        <p>A manager will contact you shortly to confirm your order.</p>
        <button className={classes.button} onClick={onClose}>
          <CloseIcon />
        </button>
      </div>
    </div> );
  } else {
    return null;
  }
}

export default Popup;