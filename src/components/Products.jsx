import { useFilter } from '../hooks/useFilter';
import { AddToCartIcon, RemoveFromCartIcon } from './Icons';
import { products } from '../mocks/products.json';
import './Products.css';
import { useContext } from 'react';
import { CartContext } from '../contexts/cart';

export function Products() {
  const { filterProducts } = useFilter();
  const filteredProducts = filterProducts(products);
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  const checkProductInCar = (product) => {
    return cart.some((item) => item.id === product.id);
  };

  return (
    <main className='products'>
      <ul>
        {filteredProducts.slice(0, 5).map((product) => {
          const isProductInCart = checkProductInCar(product);

          return (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />

              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>

              <div>
                <button
                  style={{ backgroundColor: isProductInCart ? 'red' : 'blue' }}
                  onClick={() =>
                    isProductInCart
                      ? removeFromCart(product)
                      : addToCart(product)
                  }
                >
                  {isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
