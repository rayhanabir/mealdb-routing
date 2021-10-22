import React from 'react';
import './Items.css'

const Items = (props) => {
    const{strCategoryThumb, strCategory, strCategoryDescription }=props.category;
    return (
        <>
         <section className="items-container">
            <div className='card'>
                <img src={strCategoryThumb} alt="" />
                <h4 className="category">Category: {strCategory}</h4>
                <p>Description: {strCategoryDescription.slice(0, 150)}</p>
                <button className="meal-btn">Open</button>
            </div>

         </section>  
        </>
    );
};

export default Items;<p>all item here</p>