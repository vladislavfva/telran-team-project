import React from "react";
import cactus from "./cactus.svg";
import classes from "../../components/NotFound/NotFound.module.css";

export const SvgNotFound = () => {
  return (
    <div style={{ display: "flex" }}>
      <svg
        className={classes.svgFourLetter}
        width="180"
        height="246"
        viewBox="0 0 180 246"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M99.4461 139.709V96.7939H152.21V139.709H179.999V187.196H152.21V245.94H99.4461V187.196H0.601562V145.337L88.1898 0.0599365H147.989L64.6218 139.709H99.4461Z"
          fill="#92A234"
        />
      </svg>
      <img src={cactus} alt="zero" className={classes.svgCactus} />
      <svg
        className={classes.svgFourLetter}
        width="180"
        height="246"
        viewBox="0 0 180 246"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M99.4461 139.709V96.7939H152.21V139.709H179.999V187.196H152.21V245.94H99.4461V187.196H0.601562V145.337L88.1898 0.0599365H147.989L64.6218 139.709H99.4461Z"
          fill="#92A234"
        />
      </svg>
    </div>
  );
};
