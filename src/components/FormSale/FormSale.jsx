import React, { useState } from "react";

import classes from "./FormSale.module.css";

const defaultFormSale = {
  username: "",
  phonenumber: "",
  email: "",
};

const saleBlockImage = new URL("../../assets/images/image.png", import.meta.url);

function FormSale() {
  const [formDta, setFormData] = useState(defaultFormSale);

  const userSale = (e) => {
    let { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const userSaleSubmit = () => {};

  return (
    <div className={classes.form_sale__container}>
      <h3 className={classes.paragraf_sale}>5% off on the first order</h3>

      <div className={classes.inside_block}>
        <img className={classes.inside_img} src={saleBlockImage} alt="" />
        <div className={classes.inside_block__inputs}>
        <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={useState}
            />
            <input
              type="phone"
              placeholder="Phone number"
              name="phonenumber"
              onChange={useState}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={useState}
            />
          <div>
            <button
              className={classes.sale_button}
              type="button"
              onClick={userSaleSubmit}
            >
              Get a discount
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormSale;
