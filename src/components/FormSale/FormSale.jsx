import classes from './FormSale.module.css';
import gardenToolsImage from '../../assets/images/form.png';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { sendSaleData } from '../../store/slices/sendSaleSlice';
import { useState } from 'react';

function FormSale() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data) => {
    dispatch(sendSaleData(data));
    setIsSubmitted(true);
    reset();
  };

  return (
    <div className={`${classes.form_block} section`}>
      <h2>5% off on the first order</h2>
      <div className={classes.form_wrapper}>
        <img src={gardenToolsImage} alt="garden tools" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Name"
            {...register('name', {
              required: {
                value: true,
                message: 'Name is required!',
              },
              pattern: {
                value: /^[a-zA-Z]+$/i,
                message: 'Please enter real name!',
              },
            })}
          />
          {errors.name && (
            <p className={classes.error}>{errors.name.message}</p>
          )}
          <input
            type="text"
            placeholder="Phone number"
            {...register('phone', {
              required: {
                value: true,
                message: 'Phone is required!',
              },
              pattern: {
                value: /^\+49\d{10}$/,
                message: 'Please enter valid german phone number!',
              },
            })}
          />
          {errors.phone && (
            <p className={classes.error}>{errors.phone.message}</p>
          )}
          <input
            type="text"
            placeholder="Email"
            {...register('email', {
              required: {
                value: true,
                message: 'Email is required!',
              },
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: 'Please enter valid email!',
              },
            })}
          />
          {errors.email && (
            <p className={classes.error}>{errors.email.message}</p>
          )}
          {isSubmitted && (
            <p className={classes.error}>
              The discount has been successfully sent by email!
            </p>
          )}
          <button>Get a discount</button>
        </form>
      </div>
    </div>
  );
}

export default FormSale;
