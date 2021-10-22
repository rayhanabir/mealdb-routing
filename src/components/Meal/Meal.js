import React from 'react';
import { useHistory } from 'react-router';
import './Meal.css';
const Meal = (props) => {
    console.log(props.meal);
    const{strMealThumb, strMeal, idMeal} = props.meal;
    const history = useHistory()
    const handleDetails=()=>{
        history.push(`/meal/${idMeal}`)
    }
    return (
        <div>
            <div className="single-meal">
                <img src={strMealThumb} alt="" />
                <h4>Name: {strMeal}</h4>
                <button onClick={handleDetails} className="meal-btn">Details</button>
            </div>
        </div>
    );
};

export default Meal;