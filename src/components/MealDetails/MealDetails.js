import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './MealDetails.css';
const MealDetails = () => {

    const [mealDetails, setMealDetails] = useState({})
    const {mealId} = useParams();

    useEffect(()=>{
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
        fetch(url)
        .then(res => res.json())
        .then(data =>setMealDetails(data.meals[0]))
    },[]);

    const {strArea, strCategory, strMeal, strMealThumb, strInstructions, } = mealDetails;
    return (
        <div className="single-card">
           <div className="meal-details-card">
               <img src={strMealThumb} alt="" />
               <h4>Name:{strMeal}</h4>
               <h5>Category:{strCategory}</h5>
               <p>Area: <small>{strArea}</small></p>
               <p>Instruction: {strInstructions?.slice(0,130)}</p>
               <button className="meal-btn">Order</button>
           </div>
        </div>
    );
};

export default MealDetails;