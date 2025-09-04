import React from "react";
import { useProduct } from "../Context/FilterContext";

const ProductsListFilter = () => {
  const { products } = useProduct();

  return (
    <div className="grid grid-cols-3 gap-4 mt-4">
      {products.map((p) => (
        <div key={p.id} className="border p-2 rounded">
          <img src={p.images[0]} alt={p.name} className="w-full h-48 object-cover" />
          <h3 className="text-lg font-bold">{p.name}</h3>
          <p>{p.price} $</p>
          <p>{p.Brands.name}</p>
          <p>{p.subcategory.name}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductsListFilter;
