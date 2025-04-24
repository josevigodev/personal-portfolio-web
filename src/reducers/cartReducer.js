export const initialCartState = JSON.parse(window.localStorage.getItem('cart')) || [];

const updateCartLocaleStorage = (newState) => {
  window.localStorage.setItem('cart', JSON.stringify(newState));
}

export function cartReducer(cart, action) {
  const { type, product } = action;
  switch (type) {
    case 'added_to_cart': {
      const productInCartIndex = cart.findIndex(
        (item) => item.id === product.id
      );

      if (productInCartIndex >= 0) {
        const newCart = structuredClone(cart);
        newCart[productInCartIndex].quantity += 1;
        updateCartLocaleStorage(newCart);
        return newCart;
      } else {
        const newCart = [
          ...cart,
          {
            ...product,
            quantity: 1,
          },
        ];
        updateCartLocaleStorage(newCart);
        return newCart;
      }
    }

    case 'removed_from_cart': {
      const newCart = cart.filter((item) => item.id !== product.id);
      updateCartLocaleStorage(newCart);
      return newCart;
    }

    case 'clean_cart': {
      window.localStorage.removeItem('cart');
      return initialCartState;
    }

    default: {
      throw new Error(`Action ${type} undefined`);
    }
  }
}