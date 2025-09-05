import { createContext, useContext, useState } from "react";

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState("");

  // BÜTÜN sahələri boş massivlərlə başlayırıq (xətanın səbəbi bu idi)
  const [filters, setFilters] = useState({
    categories: [],  // "Clothing", "Shoes", "Bags"
    brands: [],      // "Balenciaga" və s.
    sizes: [],       // "S", "M", "L", ...
    colors: []       // "black", "white", ...
  });

  // Checkbox/lenta dəyişəndə çağır
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
