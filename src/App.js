import React from 'react';
import mySearchImage from './Images/icons8-search-52.png';

import './App.css';
 function App(){
    return(
        <>
        <div className="container" >
        {/* <h1>Welcome to The Weather App</h1> */}
         
         <div className='card'>
            <div className='search'>
                <input type="text" placeholder="enter the city" />
                <button><img src={mySearchImage} alt="Button Icon"/> </button>
            </div>
         </div>
        </div>
        </>
    )
 }
export default App;