import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './Resturant.css'
const Resturant = () => {
    const [searchText, setSearchText] = useState('');
    const [meals, setMeals] = useState([])
    useEffect(()=>{
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            if(data.meals!==null){
                setMeals(data.meals)
            }
        })
    },[searchText])

    const handleSearch =(e) =>{
        const searchValue = e.target.value;
        setSearchText(searchValue);
    }
    return (
        <div>
            <div className="input-field">
                <input onChange={handleSearch} type="text" placeholder="search your food" />
            </div>

            <div className="meals-container">
                {
                    meals.map(meal => <Meal meal={meal}
                    key={meal.idMeal}
                    ></Meal>)
                }
            </div>

            {/* responsive not added */}
           
        </div>
    );
};

export default Resturant;