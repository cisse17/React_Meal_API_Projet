import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../style.css"

const Main = () => {
    const [items, setItems] = useState([]);

    useEffect(()=> {
        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
        .then((res) => {
            console.log(res);
            setItems(res.data.meals);
        })
        .catch((error)=> {
            console.log(error)
        })
    })

   const itemsList =  items.map(({strMeal, strMealThumb, idMeal}) =>{
        return <section className='card'>
            <img src={strMealThumb} alt=''/>
    
            <section className='content'>
                <p>{strMeal}</p>
                <p>#id {idMeal}</p>
            </section>

        </section>
       
    }
        
    )
    return <div className='items-containers'>
        {itemsList}
    </div>
 
}

export default Main
