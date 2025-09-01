import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { FaBasketShopping, FaRegHeart } from 'react-icons/fa6'
import { useParams } from 'react-router'
import { getProdForDetails } from '../../services'

function Details() {
  const { id } = useParams()
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const [details, setDetails] = useState({})
  const [activeSize, setActiveSize] = useState(null)

  useEffect(() => {
    getProdForDetails(id).then(res => {
      setDetails(res)
      setActiveSize(res.Size?.[0])
    })
  }, [id])

  const handleSizeClick = (size) => setActiveSize(size)

  return (
    <div className='grid grid-cols-2 max-md:grid-cols-1 gap-6 pt-20 px-4 md:px-20'>
      {/* Swiper */}
      <div className='relative'>
        <Swiper
          modules={[Navigation]}
          loop={true}
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
                className='w-full h-full object-contain'
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation buttons */}
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

        {/* Size Selection */}
        <div className='flex flex-col gap-3'>
          <p className='text-gray-600 uppercase mb-2'>Choose Size:</p>
          <div className='flex gap-2'>
            {details.Size?.map((size, i) => (
              <button
                key={i}
                onClick={() => handleSizeClick(size)}
                className={`py-2 px-4 border border-gray-300 rounded cursor-pointer ${
                  activeSize === size ? 'bg-gray-300 font-bold' : ''
                }`}
              >
                {size}
              </button>
            ))}
          </div>
          <p className='underline text-sm mt-2 cursor-pointer'>Size Chart /</p>
        </div>

        {/* Actions */}
        <div className='flex gap-4 items-center'>
          <button className='py-3 px-5 bg-gray-300 rounded-md text-xl'>
            <FaRegHeart />
          </button>
          <button className='flex bg-black text-white py-3 px-6 rounded-md items-center gap-2'>
            <FaBasketShopping /> Add to Basket
          </button>
        </div>

        {/* Description */}
        <div>
          <p className='font-semibold mb-1'>Description:</p>
          <p className='text-gray-700'>{details.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Details
