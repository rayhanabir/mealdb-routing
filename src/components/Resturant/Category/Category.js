import React, { useEffect, useState } from 'react';
import Items from '../../Items/Items';
import './Category.css'
const Category = () => {
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(res=>res.json())
        .then(data=>setCategories(data.categories))
    },[])
    return (
        <div>
           <div className="category-container">
               {
                 categories.map(category=><Items category={category}
                 key={category.idCategory}
                 ></Items>)  
               }
           </div>
        </div>
    );
};

export default Category;