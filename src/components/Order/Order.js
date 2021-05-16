import React from "react";
import classes from "./Order.module.css";

const order = (props) => {
    //console.log(props.ingredients);

    const ingredients = [];

    for (let ingredientName in props.ingredients) {
        ingredients.push(
            {
                name: ingredientName,
                amount: props.ingredients[ingredientName]
            }
        );
    }

    const ingredientOutput = ingredients.map(ig => {
       return <span style={{
           textTransform: 'capitalize',
           display: 'inline-block',
           margin: '0 8px',
           border: '1px solid #ccc',
           padding: '5px'
       }}
           key={ig.name}>{ig.name} &nbsp; ({ig.amount}) &nbsp; &nbsp; &nbsp; </span>
    });

    return (
        <div className={classes.Order}>
            <p>Ingredients: {ingredientOutput}</p>
            <p>Price: <strong>&#8377; {Number.parseFloat(props.price).toFixed(2)}</strong></p>
        </div>
    )
}

export default order;