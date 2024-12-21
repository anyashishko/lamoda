import React, { useState } from "react";
import FilterBar from "./components/FilterBar";
import ProductList from "./components/ProductList";
import Sort from "./components/Sort";
import { products as initialProducts } from "./data/products";
import useFilters from "./hooks/useFilters";
import useSort from "./hooks/useSort";
import "./App.css";

const App = () => {
  const initialFilters = {
    searchTerm: "",
    selectedColors: [],
    priceRange: { min: 0, max: 9999 },
  };

  const [activeSort, setActiveSort] = useState("ratingDesc");
  const [filters, setFilters] = useState(initialFilters);

  const filteredProducts = useFilters(initialProducts, filters);
  const sortedProducts = useSort(filteredProducts, activeSort);

  return (
    <div className="App">
      <h1>Product Store</h1>
      <FilterBar filters={filters} setFilters={setFilters} initialFilters={initialFilters} />
      <Sort activeSort={activeSort} setActiveSort={setActiveSort} />
      <ProductList products={sortedProducts} />
    </div>
  );
};

export default App;
