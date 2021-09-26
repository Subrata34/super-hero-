import React, { useEffect, useState } from 'react';
import Amount from './Amount/Amount';
import Cart from './Cart';
import './Person.css'
const Person = () => {
    const[persons,setPerson]=useState([]);
    const[count ,setCount ]=useState([]);
    useEffect (()=>{
        fetch(`./Apijson.json`)
        .then(res=>res.json())
        .then(data=>setPerson(data));
      },[])
      const handleSalary=(person)=>{ 
      const newCount =[...count,person];
      setCount(newCount)
        
        
      }
      
    return (
    <div> 
        <h1 className='text-center text-primary'>Bangladesh <span className='text-success'> writer</span> community</h1>
        <div className='cart-person'>
            <div className ='person-container '>
                 <h1>Writer information :</h1> 
                <div className='container-div'>
               {
                   persons.map(person=><Cart 
                    key={person.Serial_number}
                    person ={person}
                    handleSalary={handleSalary}
                    ></Cart>)
               }
              </div>
            </div>
          
            <div className='persion-salary'>
                  <Amount count ={count}></Amount>
            </div>
        </div>
     </div>
    );
};

export default Person;