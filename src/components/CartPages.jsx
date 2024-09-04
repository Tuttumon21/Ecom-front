import React from 'react'

const CartPages = ({ cart, removeFromCart }) => {
    if (cart.length === 0) return <p>Your cart is empty.</p>;

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
  return (
     <div>
    <h2>Shopping Cart</h2>
    <table className="cart-table">
        <thead>
            <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {cart.map((item, index) => (
                <tr key={index}>
                    <td>{item.name}</td>
                    <td>${item.price.toFixed(2)}</td>
                    <td>{item.quantity}</td>
                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                    <td>
                        <button className='remove-button' onClick={() => removeFromCart(index)}>Remove</button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
    <div className="total">
        <h3>Total: ${total}</h3>
    </div>
</div>
);
};
    
      

export default CartPages
