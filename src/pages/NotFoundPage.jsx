import React from "react";
import { SvgNotFound } from "../assets/iconComponents/SvgNotFound";
import classes from "../components/NotFound/NotFound.module.css";
import { Link } from "react-router-dom";
import not_found from '../assets/iconComponents/404.svg'

const NotFoundPage = () => {
  return (
    <div className={classes.container}>
      <div><SvgNotFound /></div>
      <div className={classes.container_text}>
        {/* <img src={not_found} alt="not_found" className={classes.img} /> */}
        <h2>Page Not Found</h2>
        <div>
          <p>We're sorry, the page you requested could not be found.</p>
          <p>Please go back to the homepage.</p>
        </div>

        <Link to={"/"}>
          <button>Go Home</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
