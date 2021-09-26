import React from 'react';
import './cart.css';
const Cart = (props) => {
  //console.log(props)
    const{name,passion,salary,Works,Serial_number,img}=props.person;
    const handleSalary=person=>{
       // console.log(person);
    }
    return (
        <div className='cart-container'>
            <div>
            <img className='Img' src={img} alt=""/>
            <h2>Number Serial:{Serial_number}</h2>
            <h2>Name:{name}</h2>
            <h3>Passion:{passion}</h3>
            <h3>Works:{Works}</h3>
            <h4>salary:{salary}</h4>
            <button
             onClick={()=>props.handleSalary(props.person)} >cost</button>
            </div>
           
            
        </div>
    );
};

export default Cart;