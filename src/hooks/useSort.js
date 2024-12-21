import { useMemo } from "react";

const useSort = (products, activeSort) => {
  const sortedProducts = useMemo(() => {
    return [...products].sort((a, b) => {
      if (activeSort === "priceAsc") return a.price - b.price;
      if (activeSort === "priceDesc") return b.price - a.price;
      return b.rating - a.rating;
    });
  }, [products, activeSort]);

  return sortedProducts;
};

export default useSort;
