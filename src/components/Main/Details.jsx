import React, { useContext, useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { FaBasketShopping, FaRegHeart, FaCheck, FaHeart } from 'react-icons/fa6'
import { useParams } from 'react-router'
import { getProdForDetails } from '../../services'
import SizeChart from './SizeChart'
import Basket from '../Header/Basket'
import { BasketContext } from '../Context/BasketContext'
import { WishlistContext } from '../Context/WishlistContext'

function Details() {
  const { addToBasket, basketPopUp, setBasketPopUp } = useContext(BasketContext)
  const { wishlistData, addToWishlist, removeFromWishlist } = useContext(WishlistContext)
  const { id } = useParams()
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const [details, setDetails] = useState({})
  const [activeSize, setActiveSize] = useState(null)
  const [selectedColor, setSelectedColor] = useState(null) // <- Yeni state
  const [sizeChart, setSizeChart] = useState(false)
  const [buttonState, setButtonState] = useState('price') // price | loading | added

  useEffect(() => {
    if (id) {
      getProdForDetails(id).then(res => {
        setDetails(res)
        setActiveSize(res.Size?.[0])
        setSelectedColor(res.Colors?.[0] || null) // İlk rəng default
      })
    }
  }, [id])

  const handleSizeClick = (size) => setActiveSize(size)

  const handleAddToBasket = () => {
    if (!activeSize) return alert("Please select a size!")
    if (!selectedColor) return alert("Please select a color!")

    setButtonState('loading')
    setTimeout(() => {
      setButtonState('added')
      addToBasket({
        ...details,
        selectedSize: activeSize,
        selectedColor, // <- seçilmiş rəng basket-ə əlavə olunur
        quantity: 1
      })
      setBasketPopUp(true)
      setTimeout(() => setButtonState('price'), 1000)
    }, 1000)
  }

  const isInWishlist = wishlistData.some(item => item.id === details.id)
  const handleWishlistClick = () => {
    if (isInWishlist) {
      removeFromWishlist(details.id)
    } else {
      addToWishlist(details)
    }
  }

  return (
    <>
      <div className='grid grid-cols-2 max-md:grid-cols-1 gap-6 pt-20 px-4 md:px-20'>
        {/* Swiper */}
        <div className='relative'>
          <Swiper
            modules={[Navigation]}
            loop={details?.images?.length > 1}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current
              swiper.params.navigation.nextEl = nextRef.current
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current
            }}
            className='rounded-[15px] sm:rounded-[20px] h-full w-full'
          >
            {details.images?.map((img, i) => (
              <SwiperSlide key={i}>
                <img
                  src={img}
                  alt={`slide ${i + 1}`}
                  className='w-full h-full object-contain!'
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            ref={prevRef}
            className="absolute top-1/2 left-2 -translate-y-1/2 text-black text-2xl sm:text-3xl p-2 cursor-pointer z-10"
          >
            🠔
          </button>
          <button
            ref={nextRef}
            className="absolute top-1/2 right-2 -translate-y-1/2 text-black text-2xl sm:text-3xl p-2 cursor-pointer z-10"
          >
            🠖
          </button>
        </div>

        {/* Product Info */}
        <div className='flex flex-col gap-6'>
          <div>
            <h1 className='font-bold uppercase text-xl sm:text-2xl'>{details.name}</h1>
            <p className='font-bold text-lg sm:text-xl'>{details.price}$</p>
          </div>

          {/* Color Selection */}
          <div>
            {details?.Colors?.length > 0 ? 
              <>
              <p className='text-gray-600 uppercase mb-2'>CHOOSE COLOR:</p>
            <div className='flex gap-2 w-full py-3'>
              {details?.Colors?.map((color, i) => (
                <div key={i} className='flex flex-col items-center'>
                  <button 
                    onClick={() => setSelectedColor(color)}
                    className='cursor-pointer w-[20px] h-[20px] rounded-full transition-all duration-200 border border-gray-300'
                    style={{ backgroundColor: color }}
                  ></button>
                  {selectedColor === color && (
                    <div className="w-[12px] h-[2px] bg-black mt-1 rounded-full"></div> // Alt xətt
                  )}
                </div>
              ))}
            </div>
            </> : ""
            }
          </div>

          {/* Size Selection */}
          <div className='flex flex-col gap-3'>
            <p className='text-gray-600 uppercase mb-2'>Choose Size:</p>
            <div className='flex gap-2'>
              {details.Size?.map((size, i) => (
                <button
                  key={i}
                  onClick={() => handleSizeClick(size)}
                  className={`py-2 px-4 border border-gray-300 rounded cursor-pointer ${activeSize === size ? 'bg-gray-300 font-bold' : ''}`}
                >
                  {size}
                </button>
              ))}
            </div>
            <p onClick={() => setSizeChart(true)} className='underline text-sm mt-2 cursor-pointer'>Size Chart /</p>
          </div>

          {/* Actions */}
          <div className='flex md:gap-4 max-md:gap-2 items-center'>
            <button
              onClick={handleWishlistClick}
              className='cursor-pointer py-3 px-5 bg-gray-300 rounded-md text-xl'
            >
              {isInWishlist ? <FaHeart /> : <FaRegHeart />}
            </button>

            <button
              onClick={handleAddToBasket}
              className={`max-md:w-full relative flex items-center justify-center w-44 h-12 overflow-hidden border rounded-md mx-auto sm:mx-0 transition-colors duration-200 cursor-pointer`}
            >
              <span className={`absolute flex items-center justify-center w-full h-full transition-transform duration-300 ${buttonState === 'price' ? 'translate-y-0' : '-translate-y-full'}`}>
                Add to Basket
              </span>
              <span className={`absolute flex items-center justify-center w-full h-full transition-transform duration-300 ${buttonState === 'loading' ? 'translate-y-0' : 'translate-y-full'}`}>
                Loading...
              </span>
              <span className={`absolute flex items-center justify-center w-full h-full transition-transform duration-300 ${buttonState === 'added' ? 'translate-y-0' : 'translate-y-full'}`}>
                Added!
              </span>
            </button>
          </div>

          {/* Description */}
          <div>
            <p className='font-semibold mb-1'>Description:</p>
            <p className='text-gray-700'>{details.description}</p>
          </div>
        </div>
      </div>

      {/* SizeChart */}
      {sizeChart && <SizeChart onClose={() => setSizeChart(false)} />}
      {basketPopUp && <Basket basketPopUp={basketPopUp} setBasketPopUp={setBasketPopUp} />}
    </>
  )
}

export default Details
