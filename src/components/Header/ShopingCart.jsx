import { useContext } from "react";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa6";
import { BasketContext } from "../Context/BasketContext";
import { WishlistContext } from "../Context/WishlistContext";

function ShoppingCart() {
    const { heartPopUp, setHeartPopUp, setEmojiPopUp, emojiPopUp, basketPopUp, setBasketPopUp } = useContext(WishlistContext);
    const { basketData, setBasketData, removeFromBasket, updateQuantity } = useContext(BasketContext);


  if (!basketData || basketData.length === 0) {
    return <p className="p-4 text-center">Basket is empty</p>;
  }

  return (
    <div>
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <span>
          {basketData.reduce((acc, item) => acc + item.quantity, 0)}{" "}
          {basketData.length === 1 ? "product" : "products"}
        </span>
        <button className="cursor-pointer" onClick={() => setBasketData([])}>Delete All</button>
      </div>

      {basketData.map((item, index) => (
        <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}-${index}`} className="flex p-4 border-b border-gray-200">
          <div className="w-1/3">
            <img src={item.images?.[0]} alt={item.name} className="w-full h-auto" />
          </div>
          <div className="w-2/3 pl-3 flex flex-col justify-between">
            <p>{item.name}</p>

            <div className="flex items-center gap-2 my-1">
              <span>Color:</span>
              <div className="w-5 h-5 rounded-full border" style={{ backgroundColor: item.selectedColor }}></div>
            </div>

            <button className="border border-gray-300 w-20 my-2">{item.selectedSize}</button>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                {item.quantity === 1 ? (
                  <FaTrash className="cursor-pointer" onClick={() => removeFromBasket(item.id, item.selectedSize, item.selectedColor)} />
                ) : (
                  <FaMinus className="cursor-pointer" onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor, item.quantity - 1)} />
                )}
                <span>{item.quantity} pcs</span>
                <FaPlus className="cursor-pointer" onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor, item.quantity + 1)} />
              </div>
              <span>{(item.price * item.quantity).toFixed(2)} $</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShoppingCart;
