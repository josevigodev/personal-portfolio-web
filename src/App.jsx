import { Header } from './components/Header';
import { Products } from './components/Products';
import { Footer } from './components/Footer';
import { Cart } from './components/Cart';
import { CartContextProvider } from './components/CartContextProvider';

export default function App() {
  return (
    <CartContextProvider>
      <Header />
      <Cart />
      <Products />
    </CartContextProvider>
  );
}
