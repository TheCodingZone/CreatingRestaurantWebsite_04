import React from 'react'
import Card from '../UI/Card';

import classes from '../MEALS/MealItem.module.css'

export default function meal() {
    const DUMMY_MEALS = [
        {
          id: 'm1',
          name: 'Sushi',
          description: 'Finest fish and veggies',
          price: 22.99,
        },
        {
          id: 'm2',
          name: 'Schnitzel',
          description: 'A german specialty!',
          price: 16.5,
        },
        {
          id: 'm3',
          name: 'Barbecue Burger',
          description: 'American, raw, meaty',
          price: 12.99,
        },
        {
          id: 'm4',
          name: 'Green Bowl',
          description: 'Healthy...and green...',
          price: 18.99,
        },
      ];

      const mealist=DUMMY_MEALS.map(dish=>(
        
        <li className={classes.meal}>
        <div >
        <h3 >{dish.name}</h3>
        <div className={classes.description}>{dish.description}</div>
        <div className={classes.price}>RS:{dish.price}</div>
        </div>

       
          
        
        <div>
        
        <button className={classes.button}>ADD ITEM</button>
        </div>

        <div className={classes.quantity}>
       
       <label htmlFor="" className={classes.label}>Quantity</label>
       <input type="number" className={classes.input}/>
     </div>
        </li>
        ))
    return (
      <div>
          <Card>
              <ul>{mealist}</ul>
        
          </Card>
      
      </div>
    )
  }
        
        
      
       
       
