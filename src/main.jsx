import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import React from 'react';
import { FilterContextProvider } from './components/FilterContextProvider';

createRoot(document.getElementById('root')).render(
  <FilterContextProvider>
    <App />
  </FilterContextProvider>
);
