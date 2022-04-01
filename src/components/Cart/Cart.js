import React from 'react';
import './Cart.css';

const Cart = ({ cart, handleRemoveFromCart }) => {
    // Conditional rendering option
    // 1. Element variable
    
    let command;
    if(cart.length === 0){
        command = <div>
            <h5>Please Add at least one item!!!</h5>
            <p>Please!!!</p>

        </div>
    }
    else if(cart.length === 1){
        command = <p>Please add more</p>
    }
    else{
        <p><small>Thanks for adding item</small></p>
    }

    return (
        <div>
            <h2>Items Selected: {cart.length}</h2>
            
            {
                cart.map(tShirt => <p>
                    {tShirt.name}
                    <button onClick={() => handleRemoveFromCart(tShirt)}>X</button>
                </p>)
            }

            {/* 4. ||  */}
            {cart.length === 0 || <p className='orange'>YAY!! You are buying</p>}

            {/* 3. && Operator (shorthand) */}
            {cart.length === 3 && <div className='orange'>
                <h3>Trigonal</h3>
                <p>3 Jon ke ki gift diba?</p>
            </div>}

            {/* 1. Element variable */}
            {command}
            
            {/* 2.ternary operator condition ? true : false */}
            {cart.length !== 4 ? <p>Keep adding</p> : <button>Remove all</button>}
            {cart.length === 4 && <button className='orange'>Review Order</button>}
        </div>
    );
};

export default Cart;