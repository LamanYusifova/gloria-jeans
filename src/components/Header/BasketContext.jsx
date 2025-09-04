import { createContext, useState, useEffect } from "react";

export const BasketContext = createContext();

export function BasketProvider({ children }) {
  const [basketData, setBasketData] = useState(() => {
    // LocalStorage-dan oxu
    const saved = localStorage.getItem("basket");
    return saved ? JSON.parse(saved) : [];
  });

  const [basketPopUp, setBasketPopUp] = useState(false);
  const [emojiPopUp, setEmojiPopUp] = useState(false);

  useEffect(() => {
    // Basket dəyişdikdə localStorage-a yaz
    localStorage.setItem("basket", JSON.stringify(basketData));
  }, [basketData]);

  const addToBasket = (item) => {
    setBasketData(prev => {
      // Eyni məhsulu tap (id + selectedSize)
      const existingIndex = prev.findIndex(
        x => x.id === item.id && x.selectedSize === item.selectedSize
      );

      if (existingIndex !== -1) {
        // Eyni məhsul varsa quantity artırsın
        const newBasket = [...prev];
        newBasket[existingIndex].quantity += 1;
        return newBasket;
      } else {
        // Yeni məhsul əlavə olunsun
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromBasket = (id, size) => {
    setBasketData(prev => prev.filter(x => !(x.id === id && x.selectedSize === size)));
  };

  const updateQuantity = (id, size, newQuantity) => {
    setBasketData(prev =>
      prev.map(item =>
        item.id === id && item.selectedSize === size
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  return (
    <BasketContext.Provider value={{
      basketData,
      setBasketData,
      addToBasket,
      removeFromBasket,
      updateQuantity,
      basketPopUp,
      setBasketPopUp,
      emojiPopUp, setEmojiPopUp 
    }}>
      {children}
    </BasketContext.Provider>
  );
}
