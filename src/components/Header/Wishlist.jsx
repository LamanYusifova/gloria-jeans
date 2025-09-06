import React, { useContext, useState, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa6';
import SelectSize from './SelectSize';
import { WishlistContext } from '../Context/WishlistContext';
import { BasketContext } from '../Context/BasketContext';

function Wishlist() {
  const { wishlistData, removeFromWishlist, setBasketPopUp } = useContext(WishlistContext);
  const { basketPopUp, addToBasket } = useContext(BasketContext);

  const [selectedSizeMap, setSelectedSizeMap] = useState({});
  const [selectedColorMap, setSelectedColorMap] = useState({});
  const [buttonStateMap, setButtonStateMap] = useState({});
  const [showSizesMap, setShowSizesMap] = useState({});

  useEffect(() => {
    const initialButtonState = {};
    const initialColorState = {};
    wishlistData.forEach(item => {
      initialButtonState[item.id] = 'price';
      initialColorState[item.id] = item.Colors?.[0] || null; 
    });
    setButtonStateMap(initialButtonState);
    setSelectedColorMap(initialColorState);
  }, [wishlistData]);

  if (!wishlistData || wishlistData.length === 0) {
    return <p className="p-4 text-center">Wishlist is empty</p>;
  }

  const handlePriceClick = (id) => {
    setShowSizesMap(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleSizeSelect = (item, size) => {
    const color = selectedColorMap[item.id] || item.Colors?.[0];

    setSelectedSizeMap(prev => ({ ...prev, [item.id]: size }));
    setButtonStateMap(prev => ({ ...prev, [item.id]: 'loading' }));

    const basketItem = { ...item, selectedSize: size, selectedColor: color };

    setTimeout(() => {
      addToBasket(basketItem);
      setBasketPopUp(true);

      setButtonStateMap(prev => ({ ...prev, [item.id]: 'added' }));
      setTimeout(() => {
        setButtonStateMap(prev => ({ ...prev, [item.id]: 'price' }));
        setShowSizesMap(prev => ({ ...prev, [item.id]: false }));
      }, 1000);
    }, 500);
  };

  return (
    <div className='grid grid-cols-2 p-3 gap-3'>
      {wishlistData.map((item) => (
        <div key={item.id} className='relative flex flex-col gap-3 justify-between border border-gray-300 rounded-[10px] p-3'>
          <div className='relative'>
            <img src={item.images?.[0]} alt={item.name} className="w-full h-auto" />
            {item.Size && showSizesMap[item.id] && (
              <SelectSize sizes={item.Size} onSelect={(size) => handleSizeSelect(item, size)} />
            )}
          </div>

          {item.Colors && (
            <div className='flex gap-2 w-full justify-end p-3'>
              {item.Colors.map((color, i) => (
                <div key={i} className='flex flex-col items-center'>
                  <button
                    onClick={() => setSelectedColorMap(prev => ({ ...prev, [item.id]: color }))}
                    className="cursor-pointer w-[20px] h-[20px] rounded-full border border-gray-300"
                    style={{ backgroundColor: color }}
                  ></button>
                  {selectedColorMap[item.id] === color && (
                    <div className="w-[12px] h-[2px] bg-black mt-1 rounded-full"></div>
                  )}
                </div>
              ))}
            </div>
          )}

          <p>{item.name}</p>

          <button
            onClick={() => handlePriceClick(item.id)}
            className="cursor-pointer relative flex items-center justify-center w-[40%] h-10 overflow-hidden border rounded-[10px] hover:bg-black hover:text-white transition-colors"
          >
            <span
              className={`absolute w-full hover:text-white text-black h-full flex items-center justify-center transition-transform duration-300
              ${buttonStateMap[item.id] === 'price' ? 'translate-y-0' : '-translate-y-full'}`}
            >
              {item.price} $
            </span>
            <span
              className={`absolute w-full h-full flex items-center justify-center transition-transform duration-300
              ${buttonStateMap[item.id] === 'loading' ? 'translate-y-0' : 'translate-y-full'}`}
            >
              Loading...
            </span>
            <span
              className={`absolute w-full h-full flex items-center justify-center transition-transform duration-300
              ${buttonStateMap[item.id] === 'added' ? 'translate-y-0' : 'translate-y-full'}`}
            >
              Added!
            </span>
          </button>

          <div
            className='absolute right-4 top-2 cursor-pointer'
            onClick={() => removeFromWishlist(item.id, selectedSizeMap[item.id])}
          >
            <FaHeart />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Wishlist;
