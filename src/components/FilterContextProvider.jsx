import { useState } from 'react';
import { FilterContext } from '../contexts/filter';

export function FilterContextProvider({ children }) {
  const [filter, setFilter] = useState({
    category: 'all',
    minPrice: 0,
  });

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
}
