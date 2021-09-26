import React, { useEffect, useState } from 'react';
import Cart from './Cart';
import './Person.css'
const Person = () => {
    const[persons,setPerson]=useState([]);
    const[count,setCount]=useState([]);
    useEffect (()=>{
        fetch(`./Apijson.json`)
        .then(res=>res.json())
        .then(data=>setPerson(data));
      },[])
      const handleSalary=(person)=>
      {
         console.log(person.name);
      }
    return (
    <div> 
        <h1 className='top-containted'>Bangladesh writer community</h1>
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
                   <h1>Salary Detail</h1>
                   <h2>person count :{count.lenght} </h2>
                   <h2>Total  salary:</h2>

            </div>
        </div>
     </div>
    );
};

export default Person;