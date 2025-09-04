import React, { useContext, useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules'
import { FaHeart, FaRegHeart } from 'react-icons/fa6'
import { Link } from 'react-router-dom';
import SelectSize from './SelectSize';
import { BasketContext } from './BasketContext';
import { WishlistContext } from './WishlistContext';

function ProductCard({ data }) {
  const { addToBasket, setBasketPopUp } = useContext(BasketContext);
  const { wishlistData, addToWishlist, removeFromWishlist } = useContext(WishlistContext);
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const [swiper, setSwiper] = useState(null)
  const [showSizes, setShowSizes] = useState(false)
  const [buttonState, setButtonState] = useState('price') // price | loading | added
  const [selectedSize, setSelectedSize] = useState(null)

  const isInWishlist = wishlistData.some(
    item => item.id === data.id && item.selectedSize === data.selectedSize
  );

  const handleClick = () => {
    if (isInWishlist) {
      removeFromWishlist(data.id, data.selectedSize);
    } else {
      addToWishlist(data);
    }
  };

  if (!data) return null

  const handlePriceClick = () => {
    setShowSizes(!showSizes)
  }

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
    setButtonState('loading');

    setTimeout(() => {
      setButtonState('added');
      addToBasket({ ...data, selectedSize: size });
      setBasketPopUp(true);

      setTimeout(() => {
        setButtonState('price');
        setShowSizes(false);
      }, 1000);
    }, 1000);
  };


  return (
    <div className='flex flex-col gap-3 w-full mx-auto justify-around'>
      <div className='relative group flex flex-col h-full gap-4'>
        <Link to={`/details/${data.id}`}>
          <div className="relative w-full pt-3">
            <Swiper
              loop={data?.images?.length > 1}
              navigation={{ prevEl: null, nextEl: null }}
              onSwiper={setSwiper}
              modules={[Navigation]}
              className="rounded-[15px] sm:rounded-[20px] h-full w-full"
            >
              {data?.images?.map((url, i) => (
                <SwiperSlide key={i} className='relative w-full h-full'>
                  <img
                    src={url}
                    alt={`slide ${i + 1}`}
                    className="w-full h-full object-contain lg:object-cover"
                  />
                  {showSizes && <SelectSize sizes={data.Size} onSelect={handleSizeSelect} />}

                  {/* Heart icon */}
                  <div
                    onClick={(e) => {
                      e.preventDefault(); // Link-ə klik olmamasını təmin edir
                      e.stopPropagation(); // Eventin parent-ə yayılmasını dayandırır
                      handleClick(); // Wishliste əlavə/sil
                    }}
                    className='absolute top-1 right-4 hover:scale-150'
                  >
                    {isInWishlist ? <FaHeart /> : <FaRegHeart />}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Link>

        {/* Description comes first */}
        <p className="text-xs sm:text-sm lg:text-base px-2 sm:px-0">
          {data?.description.length > 100 ? data?.description.slice(0, 100) + "..." : data?.description}
        </p>

        {/* Price Button comes after description */}
        <button
          onClick={handlePriceClick}
          className={`relative flex items-center justify-center w-44 h-12 overflow-hidden border rounded-md mx-auto sm:mx-0 transition-colors duration-200 cursor-pointer`}
        >
          <span
            className={`absolute flex items-center justify-center w-full h-full transition-transform duration-300
            ${buttonState === 'price' ? 'translate-y-0' : '-translate-y-full'}`}
          >
            {`${data?.price} $`}
          </span>

          <span
            className={`absolute flex items-center justify-center w-full h-full transition-transform duration-300
            ${buttonState === 'loading' ? 'translate-y-0' : 'translate-y-full'}`}
          >
            Loading...
          </span>

          <span
            className={`absolute flex items-center justify-center w-full h-full transition-transform duration-300
            ${buttonState === 'added' ? 'translate-y-0' : 'translate-y-full'}`}
          >
            Added!
          </span>
        </button>
      </div>
    </div>
  )
}

export default ProductCard
