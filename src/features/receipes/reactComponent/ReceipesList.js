import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

import classes from './Receipe.module.css';

const ReceipesList = () => {
   const dishes = useSelector((state) => state.dish);

   console.log(dishes);

   const dishesList = dishes.map((dish) => (
      <li key={dish.id}>
         <h3>{dish.title}</h3>
         <p>{dish.ingredients}</p>
         <div className={classes.dishImage}>
            <img src={dish.image} alt='a delicous dish' />
         </div>
      </li>
   ));

   return (
      <Fragment>
         <h1>Receipes</h1>
         <ul>{dishesList}</ul>
      </Fragment>
   );
};

export default ReceipesList;
