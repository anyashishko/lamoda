import { useMemo } from "react";

const useFilters = (products, filters) => {
  const filteredProducts = useMemo(() => {
    const filterFunctions = [
      (product) =>
        !filters.searchTerm ||
        product.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(filters.searchTerm.toLowerCase()),
      (product) =>
        filters.selectedColors.length === 0 ||
        filters.selectedColors.includes(product.color),
      (product) =>
        product.price >= filters.priceRange.min &&
        product.price <= filters.priceRange.max,
    ];

    return products.filter((product) =>
      filterFunctions.every((filterFunc) => filterFunc(product))
    );
  }, [products, filters]);

  return filteredProducts;
};

export default useFilters;
