import React from 'react';

const Amount = (props) => {
    const{count}=props;
    let total=0;
    for (const amount of count){
        total=total+amount.salary ;
         
    }

    return (
        <div className=' cart-color'>
             <h1 className='text-center'>Salary Detail</h1>
                   <h2>person count :{props.count.length}</h2>
                   <h2>Total  salary:{total}</h2>
                   <button>Member Add</button>

        </div>
    );
};

export default Amount;