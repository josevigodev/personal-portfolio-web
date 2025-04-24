import { useFilter } from '../hooks/useFilter';
import { AddToCartIcon } from './Icons';
import { products } from '../mocks/products.json';
import './Products.css';

export function Products() {
  const { filterProducts } = useFilter();
  const filteredProducts = filterProducts(products);

  return (
    <main className='products'>
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <img src={product.thumbnail} alt={product.title} />

            <div>
              <strong>{product.title}</strong> - ${product.price}
            </div>

            <button>
              <AddToCartIcon />
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}
