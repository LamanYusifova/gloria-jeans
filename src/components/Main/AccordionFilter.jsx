import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useProduct } from "../Context/FilterContext";

const AccordionFilter = () => {
  const { brands, subCategories, filters, setFilters, products } = useProduct();
  const [open, setOpen] = useState(null);

  const toggle = (index) => setOpen(open === index ? null : index);

  const prices = ["0-50", "50-100", "100-200", "200-500"];

  const sizes = [...new Set(products.flatMap((p) => p.Size))];

  const accordionData = [
    { label: "Sizes", items: sizes },
    { label: "Brands", items: brands.map((b) => b.name) },
    {
      label: "Subcategories",
      items: subCategories?.Subcategory?.map((sc) => sc.name) || []
    },
    { label: "Prices", items: prices }
  ];

  const handleCheck = (label, value) => {
    setFilters((prev) => {
      const current = prev[label.toLowerCase()];
      const updated = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      return { ...prev, [label.toLowerCase()]: updated };
    });
  };

  return (
    <div className="mt-8">
      {accordionData.map((section, index) => (
        <div key={index} className="mb-2">
          <button
            className="flex items-center justify-between w-full p-3 font-medium text-black bg-white rounded-lg hover:bg-gray-50 transition-colors duration-300"
            onClick={() => toggle(index)}
          >
            <span className="text-left text-xl">{section.label}</span>
            <IoIosArrowDown
              className={`transition-transform duration-300 text-2xl ${
                open === index ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              open === index ? "max-h-[1000px] opacity-100 mt-2" : "max-h-0 opacity-0"
            }`}
          >
            <ul className="p-2 rounded-2xl border-black text-black">
              {section.items.map((item, idx) => (
                <li
                  key={idx}
                  className={`p-2 border-b border-black rounded-[10px] flex items-center`}
                >
                  <input
                    type="checkbox"
                    className="mx-2"
                    checked={filters[section.label.toLowerCase()]?.includes(item)}
                    onChange={() => handleCheck(section.label, item)}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccordionFilter;
