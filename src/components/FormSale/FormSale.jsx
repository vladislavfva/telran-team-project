import classes from './FormSale.module.css'
import gardenToolsImage from '../../assets/images/form.png';
import { useForm } from 'react-hook-form';

function FormSale() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data)
  }

  return ( <div className={`${classes.form_block} section`}>
    <h2>5% off on the first order</h2>
    <div className={classes.form_wrapper}>
      <img src={gardenToolsImage} alt="garden tools" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Name" {...register("name")}/>
        {errors.name && (<p>{errors.name.message}</p>)}
        <input type="text" placeholder="Phone number"/>
        {errors.phone && (<p>{errors.phone.message}</p>)}
        <input type="text" placeholder="Email" {...register("email", {
          pattern: {
            value: /^\S+@\S+\.\S+$/,
            message: 'Please enter valid email!'
          }
        })}/>
        {errors.email && (<p className={classes.error}>{errors.email.message}</p>)}
        <button>Get a discount</button>
    </form>
    </div>
  </div> );
}

export default FormSale;