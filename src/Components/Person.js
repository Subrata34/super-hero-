import React from 'react';
import './Person.css'
const Person = () => {
    return (
        // <div>
        //     <h1 className="title">The Superhero in our Country</h1>
        // </div>
    <div> 
        <h1 className='top-containted'>Bangladesh writer community</h1>
        <div className='cart-person'>
            <div className ='person-container'>
                 <h1>person name</h1>
            </div>
            <div className='persion-salary'>
                   <h1>Salary Detail</h1>
                   <h2>person count : <span>0</span></h2>
                   <h2>Total  salary: <span>0</span></h2>

            </div>
        </div>
     </div>
    );
};

export default Person;