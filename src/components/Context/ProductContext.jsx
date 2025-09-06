import { createContext, useContext, useState } from "react";

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState("");

  const [filters, setFilters] = useState({
    categories: [],  
    brands: [],      
    sizes: [],       
    colors: []       
  });

  const toggleFilter = (type, value) => {
    setFilters(prev => {
      const current = Array.isArray(prev[type]) ? prev[type] : [];
      return {
        ...prev,
        [type]: current.includes(value)
          ? current.filter(v => v !== value)
          : [...current, value]
      };
    });
  };

  const clearAllFilters = () => {
    setFilters({
      categories: [],
      brands: [],
      sizes: [],
      colors: []
    });
  };

  return (
    <ProductContext.Provider
      value={{
        searchQuery, setSearchQuery,
        filters, toggleFilter, clearAllFilters
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  return useContext(ProductContext);
}
