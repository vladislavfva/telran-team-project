import classes from './CartForm.module.css'
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { sendOrderData } from '../../../store/slices/sendOrderSlice';
import { useState } from 'react';
import Popup from '../../Popup/Popup';

function CartForm() {
  const dispatch = useDispatch();
  const {total, amount } = useSelector(state => state.cart)
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isActive, setIsActive] = useState(false);

  const onSubmit = (data) => {
    reset();
    dispatch(sendOrderData(data));
    setIsActive(true);
  };

  const handePopupClose = () => {
    setIsActive(false);
  }

  return ( <div className={classes.order_info}>
    <Popup isActive={isActive} onClose={handePopupClose}/>
    <p className={classes.title}>Order details</p>
    <p className={classes.count}>{amount}</p>
    <div className={classes.total_wrapper}>
      <p className={classes.total}>Total</p>
      <p className={classes.total_price}>${parseFloat(total.toFixed(2))}</p>
    </div>

    <div className={classes.cart_form}>
      <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" placeholder="Name" {...register("name", {
            required: {
              value:true,
              message: 'Name is required!'
            },
            pattern: {
              value: /^[a-zA-Z]+$/i,
              message: 'Please enter real name!'
            }
          })}/>
          {errors.name && (<p className={classes.error}>{errors.name.message}</p>)}
          <input type="text" placeholder="Phone number" {...register("phone", {
            required: {
              value:true,
              message: 'Phone is required!'
            },
            pattern: {
              value: /^\+49\d{10}$/,
              message: 'Please enter valid german phone number!'
            }
          })}/>
          {errors.phone && (<p className={classes.error}>{errors.phone.message}</p>)}
          <input type="text" placeholder="Email" {...register("email", {
            required: {
              value:true,
              message: 'Email is required!'
            },
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: 'Please enter valid email!'
            }
          })}/>
          {errors.email && (<p className={classes.error}>{errors.email.message}</p>)}
          <button>Order</button>
      </form>
    </div>
  </div> );
}

export default CartForm;