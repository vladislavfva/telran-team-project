import classes from './FormSale.module.css'
import gardenToolsImage from '../../assets/images/form.png';

function FormSale() {
  return ( <div className={`${classes.form_block} section`}>
    
    <h2>5% off on the first order</h2>
    <div className={classes.form_wrapper}>
      <img src={gardenToolsImage} alt="garden tools" />
      <form>
        <input type="text" placeholder="Name"/>
        <input type="phone" placeholder="Phone number"/>
        <input type="email" placeholder="Email"/>
        <button>Get a discount</button>
    </form>
    </div>
  </div> );
}

export default FormSale;