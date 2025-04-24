import { useReducer } from 'react';
import { CartContext } from '../contexts/cart';
import { cartReducer, initialCartState } from '../reducers/cartReducer';

export function CartContextProvider({ children }) {
  // const [cart, setCart] = useState([]);
  const [cart, dispatch] = useReducer(cartReducer, initialCartState);

  const addToCart = (product) => {
    dispatch({
      type: 'added_to_cart',
      product: product,
    });
  };

  const removeFromCart = (product) => {
    dispatch({
      type: 'removed_from_cart',
      product: product,
    });
  };

  const clearCart = () => {
    dispatch({
      type: 'clean_cart',
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
