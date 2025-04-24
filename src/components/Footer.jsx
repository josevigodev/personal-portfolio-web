import { useContext } from 'react';
import './Footer.css';
import { CartContext } from '../contexts/cart';

export function Footer() {
  const { cart } = useContext(CartContext);

  return <footer className='footer'>{JSON.stringify(cart)}</footer>;
}
