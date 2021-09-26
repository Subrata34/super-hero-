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
            <h4>salary:<span>$</span>{salary}</h4>
            <button
             onClick={()=>props.handleSalary(props.person)} >cost</button>
              <h2 className='book'><p><i class="fab fa-facebook-f"></i><i  class="fas fa-book"></i></p></h2>
              
            </div>
           
            
        </div>
    );
};

export default Cart;