import { createContext, useState, useEffect } from "react";

export const BasketContext = createContext();

export function BasketProvider({ children }) {
  const [basketData, setBasketData] = useState(() => {
    const saved = localStorage.getItem("basket");
    return saved ? JSON.parse(saved) : [];
  });

  const [basketPopUp, setBasketPopUp] = useState(false);
  const [emojiPopUp, setEmojiPopUp] = useState(false);
  const [heartPopUp, setHeartPopUp] = useState(false);

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basketData));
  }, [basketData]);

  const addToBasket = (item) => {
    setBasketData(prev => {
      // Eyni məhsulu tap (id + selectedSize + selectedColor)
      const existingIndex = prev.findIndex(
        x =>
          x.id === item.id &&
          x.selectedSize === item.selectedSize &&
          x.selectedColor === item.selectedColor
      );

      if (existingIndex !== -1) {
        // Mövcud məhsul varsa quantity artırsın
        const newBasket = [...prev];
        newBasket[existingIndex].quantity += 1;
        return newBasket;
      } else {
        // Yeni məhsul əlavə olunsun
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromBasket = (id, size, color) => {
    setBasketData(prev =>
      prev.filter(x => !(x.id === id && x.selectedSize === size && x.selectedColor === color))
    );
  };

  const updateQuantity = (id, size, color, newQuantity) => {
    setBasketData(prev =>
      prev.map(item =>
        item.id === id && item.selectedSize === size && item.selectedColor === color
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  return (
    <BasketContext.Provider
      value={{
        basketData,
        setBasketData,
        addToBasket,
        removeFromBasket,
        updateQuantity,
        basketPopUp,
        setBasketPopUp,
        emojiPopUp,
        setEmojiPopUp,
        heartPopUp,
        setHeartPopUp
      }}
    >
      {children}
    </BasketContext.Provider>
  );
}
