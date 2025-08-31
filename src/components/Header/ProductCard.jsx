import { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules'
import { FaRegHeart } from 'react-icons/fa6'
import { getData } from '../../services';
import { Link, useParams } from 'react-router-dom';

function ProductCard({ data }) {
  const { id } = useParams()
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const [subCategory, setSubCategory] = useState(null)
  const [categories, setCategories] = useState([]) // data üçün fərqli ad
  const [swiper, setSwiper] = useState(null)
  const [categoryId, setCategoryId] = useState(null)
  const [categoryName, setCategoryName] = useState('')

  useEffect(() => {
    getData().then(res => {
      setCategories(res)
    })
  }, [])

  // useEffect(() => {
  //   if (id) {
  //     getProdForDetails(id).then(res => {
  //       setSubCategory(res)
  //     })
  //   }
  // }, [id])

  useEffect(() => {
    categories.forEach(item => {
      item.Subcategory?.forEach(sub => {
        if (sub.id === Number(id)) {
          setCategoryId(item.id);
          setCategoryName(item.name);
        }
      });
    });
  }, [categories, id]);

  useEffect(() => {
    if (swiper) {
      swiper.params.navigation.prevEl = prevRef.current
      swiper.params.navigation.nextEl = nextRef.current
      swiper.navigation.init()
      swiper.navigation.update()
    }
  }, [swiper])

  if (!data) return null; // data yoxdursa heç nə göstərmə

  return (
    <div className='flex flex-col gap-3 w-full mx-auto justify-around'>
      <Link to={`/details/${data.id}`} className='relative group flex flex-col h-full'>
        <div className=" w-full pt-3">
          <Swiper
            loop={data?.images?.length > 1}
            navigation={{
              prevEl: null,
              nextEl: null,
            }}
            onSwiper={setSwiper}
            modules={[Navigation]}
            className="rounded-[15px] sm:rounded-[20px] h-full w-full">
            {data?.images?.map((url, i) => (
              <SwiperSlide key={i} className='w-full h-full'>
                <img
                  src={url}
                  alt={`slide ${i + 1}`}
                  className="w-full h-full object-contain lg:object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <button
          ref={prevRef}
          onClick={() => swiper?.slidePrev()}
          className="absolute top-1/2 left-1 sm:left-2 -translate-y-1/2 text-black text-[24px] sm:text-[30px] p-1 sm:p-2 rounded-full opacity-0 pointer-events-none cursor-pointer transition-opacity duration-300 group-hover:opacity-100 group-hover:pointer-events-auto z-10">
          🠔
        </button>

        <button
          ref={nextRef}
          onClick={() => swiper?.slideNext()}
          className="absolute top-1/2 right-1 sm:right-2 -translate-y-1/2 text-black text-[24px] sm:text-[30px] p-1 sm:p-2 rounded-full opacity-0 pointer-events-none cursor-pointer transition-opacity duration-300 group-hover:opacity-100 group-hover:pointer-events-auto z-10">
          🠖
        </button>
        <FaRegHeart className='absolute top-[15px] sm:top-[20px] right-[15px] sm:right-[20px] z-10 opacity-0 group-hover:opacity-100 hover:scale-150 cursor-pointer text-[16px] sm:text-[20px] text-black' />
      </Link>

      <p className="text-xs sm:text-sm lg:text-base px-2 sm:px-0">
        {data?.description.length > 100 ? data?.description.slice(0, 100) + "..." : data?.description}
      </p>
      <button className='border px-3 py-2 w-[80px] sm:w-[100px] rounded-[8px] sm:rounded-[10px] hover:bg-black hover:text-white transition-colors text-sm sm:text-base mx-auto sm:mx-0'>
        {data?.price} $
      </button>
    </div>
  )
}

export default ProductCard;
