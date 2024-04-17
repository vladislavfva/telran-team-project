import { Link } from 'react-router-dom';
import classes from './Empty.module.css'

function Empty({ liked }) {
  const rightInscription = liked ? "favourites" : "basket"; 

  return (
    <div className={classes.empty_cart}>
      <p>
        Looks like you have no items in your <span>{rightInscription} </span>
         currently.
      </p>
      <Link to="/all-products">
        <button>Continue Shopping</button>
      </Link>
    </div>
  );
}

export default Empty;