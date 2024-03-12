import React from 'react'
import classes from './Categories.module.css'

export const Categories = () => {
  return (
    <div className={classes.container}>
      <main className={classes.categories_container}>
        <h3>Catiegories</h3>
        <div className={classes.info_container}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </main>
    </div>
  );
}

