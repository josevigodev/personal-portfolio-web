import { useContext, useId } from 'react';
import { CartIcon, ClearCartIcon } from './Icons';
import './Cart.css';
import { CartContext } from '../contexts/cart';

export function Cart() {
  const cartButtonId = useId();
  const { cart, addToCart, clearCart } = useContext(CartContext);
  return (
    <>
      <label className='cart-button' htmlFor={cartButtonId}>
        <CartIcon />
      </label>
      <input type='checkbox' hidden id={cartButtonId} />

      <aside className='cart'>
        <ul>
          {cart.map((product) => (
            <CartItem
              key={product.id}
              {...product}
              addToCart={() => addToCart(product)}
            />
          ))}
        </ul>

        <footer>
          <button onClick={() => clearCart()}>
            <ClearCartIcon />
          </button>
        </footer>
      </aside>
    </>
  );
}

function CartItem({ thumbnail, price, title, quantity, addToCart }) {
  return (
    <li>
      <img src={thumbnail} alt={title} />

      <div>
        <strong>{title}</strong> - ${price}
      </div>

      <footer>
        <small>Qty: {quantity}</small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  );
}
