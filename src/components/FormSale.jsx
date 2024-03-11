import React, { useState } from "react";

import classes from "./FormSale.module.css";

const defaultFormSale = {
  username: "",
  phonenumber: "",
  email: "",
};

const saleBlockImage = new URL("../assets/images/image.png", import.meta.url);

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
      <div className={classes.paragraf_sale}>
        <h3>5% off on the first order</h3>
      </div>

      <div className={classes.inside_block}>
        <div>
          <img className={classes.inside_img} src={saleBlockImage} alt="" />
        </div>
        <div className={classes.inside_block__input__name}>
          <div>
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={useState}
            />
          </div>
          <div className={classes.inside_block__input__number}>
            {" "}
            <input
              type="number"
              placeholder="Phone number"
              name="phonenumber"
              onChange={useState}
            />
          </div>

          <div className={classes.inside_block__input__email}>
            {" "}
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={useState}
            />
          </div>

          <div>
            <button className={classes.sale_button} type="button" onClick={userSaleSubmit}>
              Get a discount
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormSale;
