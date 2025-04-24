import { useContext, useId } from 'react';
import './Filters.css';
import { FilterContext } from '../contexts/filter';

export function Filter() {
  const minPriceInputId = useId();
  const categorySelectId = useId();
  const { filter, setFilter } = useContext(FilterContext);

  const handleInputChange = (e) => {
    setFilter((prevState) => ({
      ...prevState,
      minPrice: e.target.value,
    }));
  };

  const handleCategoryChange = (e) => {
    setFilter((prevState) => ({
      ...prevState,
      category: e.target.value,
    }));
  };

  return (
    <section className='filters'>
      <div>
        <label htmlFor={minPriceInputId}>Prices from:</label>
        <input
          onChange={handleInputChange}
          min={0}
          max={1000}
          type='range'
          id={minPriceInputId}
          value={filter.minPrice}
        />
        <small>${filter.minPrice}</small>
      </div>
      <div>
        <label htmlFor={categorySelectId}>Category:</label>
        <select onChange={handleCategoryChange} id={categorySelectId}>
          <option value='all'>All</option>
          <option value='laptops'>Laptops</option>
          <option value='smartphones'>Smartphones</option>
          <option value='fragrances'>Fragrances</option>
        </select>
      </div>
    </section>
  );
}
