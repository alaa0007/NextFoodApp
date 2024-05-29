import React from 'react';
import classes from './meal-list.module.css';
import MealItem from './meal-item';


const MealList = ({ meals }) => {
  return (
    <ul className={classes.meals}>
        {
            meals.map((meal) => {
                return <li key={meal.id}>
                    <MealItem {...meal} />
                </li>
            })
        }
    </ul>
  )
}

export default MealList