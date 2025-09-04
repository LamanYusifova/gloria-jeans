import React, { createContext, useContext, useEffect, useState } from "react";
import { getAllBrands, getSubcategoriesById, getProdForDetails } from "../../services";

const FilterContext = createContext();

export const useProduct = () => useContext(FilterContext);

export const FilterProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    brand: [],
    subcategory: [],
    size: [],
    price: []
  });

  // Products və subcategories gətir
  useEffect(() => {
    getProdForDetails().then((res) => {
      setProducts(res);
      setFilteredProducts(res); // İlk olaraq bütün məhsullar göstərilsin
    });

    getAllBrands().then((res) => setBrands(res));
    getSubcategoriesById().then((res) => setSubCategories(res));
  }, []);

  // Filtrləmək
  useEffect(() => {
    let temp = [...products];

    if (filters.brand.length) {
      temp = temp.filter((p) => filters.brand.includes(p.Brands.name));
    }
    if (filters.subcategory.length) {
      temp = temp.filter((p) => filters.subcategory.includes(p.subcategory.name));
    }
    if (filters.size.length) {
      temp = temp.filter((p) => p.Size.some((s) => filters.size.includes(s)));
    }
    if (filters.price.length) {
      temp = temp.filter((p) =>
        filters.price.some((range) => {
          const [min, max] = range.split("-").map(Number);
          return p.price >= min && p.price <= max;
        })
      );
    }

    setFilteredProducts(temp);
  }, [filters, products]);

  return (
    <FilterContext.Provider
      value={{
        products: filteredProducts,
        brands,
        subCategories,
        filters,
        setFilters
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
