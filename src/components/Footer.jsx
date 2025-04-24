import { useContext } from 'react';
import './Footer.css';
import { FilterContext } from '../contexts/filter';

export function Footer() {
  const { filter } = useContext(FilterContext);

  return <footer className='footer'>{JSON.stringify(filter)}</footer>;
}
