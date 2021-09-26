import React from 'react';
import './cart.css';
const Cart = (props) => {
  
    const{name,passion,salary,Works,Serial_number,img}=props.person;
  
    return (
        <div className='cart-container'>
            <div>
            <img className='Img' src={img} alt=""/>
            <h2>Number Serial:{Serial_number}</h2>
            <h2>Name:{name}</h2>
            <h4>Passion:{passion}</h4>
            <h4>Works:{Works}</h4>
            <h4>salary:{salary}</h4>
            <button
             onClick={()=>props.handleSalary(props.person)} >cost</button>
            </div>
           
            
        </div>
    );
};

export default Cart;