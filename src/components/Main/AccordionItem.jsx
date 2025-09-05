import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useProducts } from "../Context/ProductContext";

function AccordionItem({ hideCategory = false }) {
  const [open, setOpen] = useState(null);
  const { filters, toggleFilter, clearAllFilters } = useProducts();

  const toggle = (index) => setOpen(open === index ? null : index);

  const faqData = [
    !hideCategory && {
      question: "Category",
      answer: ["Clothing", "Shoes", "Bags"]
    },
    {
      question: "Sizes",
      answer: ["S", "M", "L", "XL", "XXL"]
    },
    {
      question: "Brands",
      answer: ["Boss", "Paul & Shark", "Ralph Lauren", "Simkhai", "Isabel Marant", "Monse", "Prada", "Balenciaga", "Adidas"]
    },
    {
      question: "Colors",
      answer: ["blue", "black", "white", "orange", "green", "yellow", "purple"]
    },
  ].filter(Boolean);

  return (
    <div className="mt-8">
      <div className="p-5 flex items-center gap-2">
        <input
          type="checkbox"
          checked={
            (filters.categories?.length ?? 0) === 0 &&
            (filters.brands?.length ?? 0) === 0 &&
            (filters.sizes?.length ?? 0) === 0 &&
            (filters.colors?.length ?? 0) === 0
          }
          onChange={clearAllFilters}
        />
        <p>All</p>
      </div>

      {faqData.map((item, index) => (
        <div key={index} className="mb-2">
          <h2>
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium text-black bg-white rounded-lg hover:bg-gray-50 transition-colors duration-300"
              aria-expanded={open === index}
              onClick={() => toggle(index)}
            >
              <span className="text-left text-xl">{item.question}</span>
              <AiOutlinePlus
                className={`transition-transform duration-300 text-2xl ${open === index ? "rotate-45" : ""}`}
              />
            </button>
          </h2>

          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              open === index ? "max-h-[1000px] opacity-100 mt-2" : "max-h-0 opacity-0"
            }`}
          >
            <ul className="p-3 rounded-2xl text-black">
              {item.question === "Colors" ? (
                <div className="grid grid-cols-2 gap-3 flex-wrap">
                  {item.answer.map((color, i) => (
                    <label key={i} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        className="mx-1"
                        checked={(filters.colors || []).includes(color)}
                        onChange={() => toggleFilter("colors", color)}
                      />
                      <div
                        className="w-[20px] h-[20px] rounded-full border border-gray-300"
                        style={{ backgroundColor: color }}
                      ></div>
                      <span className="capitalize">{color}</span>
                    </label>
                  ))}
                </div>
              ) : (
                item.answer.map((option, pIndex) => {
                  const type =
                    item.question === "Category"
                      ? "categories"
                      : item.question === "Brands"
                      ? "brands"
                      : "sizes";

                  return (
                    <li
                      key={pIndex}
                      className={`flex items-center py-3 rounded-[10px] ${
                        pIndex < item.answer.length - 1 ? "border-b border-black" : ""
                      }`}
                    >
                      <input
                        type="checkbox"
                        className="mx-2"
                        checked={(filters[type] || []).includes(option)}
                        onChange={() => toggleFilter(type, option)}
                      />
                      {option}
                    </li>
                  );
                })
              )}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AccordionItem;
