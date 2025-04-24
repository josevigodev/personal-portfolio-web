import { useContext } from "react";
import { FilterContext } from "../contexts/filter";

export function useFilter() {
  const {filter} = useContext(FilterContext)

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filter.minPrice &&
        (filter.category === 'all' || product.category === filter.category)
      );
    });
  };

  return { filterProducts };
}