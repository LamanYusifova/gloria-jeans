import { useRef, useState, useEffect, use } from 'react'
import { IoMdSearch } from 'react-icons/io'
import ProductCard from './ProductCard'
import { getAllProducts, getData } from '../../services';
import { Link } from 'react-router';





function Search({ bg, setBg, cardImage }) {

  const [cancel, setCancel] = useState(false)
  const [data, setData] = useState([])
  const [products, setProducts] = useState([])

  useEffect(() => {
    getData().then(res => setData(res))
  }, [])

  useEffect(() => {
    getAllProducts().then(res => setProducts(res))
  }, [])


  const cancelClick = () => {
    setCancel(true)
    setBg(false)
  }

  const [swiperReady, setSwiperReady] = useState(false)


  useEffect(() => {
    setSwiperReady(true)
  }, [])

  return (
    <>
      {!cancel && (
        <div onClick={() => cancelClick()} className='overflow-y-auto bg-[#0000005d] fixed inset-0 top-[86px] lg:top-[110px] z-50'>
          <div onClick={(e) => e.stopPropagation()} className='animate-slide-search bg-white  lg:h-full  w-full pt-6'>
            <ul className='lg:hidden flex gap-2 justify-center  mt-6 max-smm1:overflow-x-scroll   '>
              {data.slice(0, 4).map((item, i) => <Link key={i} to={`/category/${item.id}`} onClick={() => cancelClick()} ><li  className='p-2 border-2 rounded-[10px] cursor-pointer'>{item.name}</li></Link>)}
            </ul>
            <div onClick={(e) => e.stopPropagation()} className='flex items-center justify-center gap-3 h-[80px] w-full '>
              <span className='translate-x-12 text-[24px]'><IoMdSearch /></span>
              <input
                type="text"
                placeholder="I'm looking for..."
                className=' w-full pl-12 pr-3 py-2 bg-[#f9f9f9] outline-none text-[16px] placeholder:text-[#a6a6a6] rounded-[10px]'
              />
              <button onClick={cancelClick} className='mr-6 cursor-pointer'>Cancel</button>
            </div>

            <div onClick={(e) => e.stopPropagation()} className='flex flex-col lg:flex-row gap-4 bg-white lg:gap-6 px-2 sm:px-4 lg:px-12 pb-4'>
              <div className='w-full lg:w-[280px] xl:w-[300px] flex-shrink-0'>
                <ul className='space-y-1 sm:space-y-2 max-h-[300px] lg:max-h-none overflow-y-auto lg:overflow-visible'>
                  {data?.slice(0, 1).map((item, i) => (
                    item.Subcategory?.map((sub, j) => (
                      <li key={j} className='flex items-center gap-2 sm:gap-3 p-2 sm:p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors'>
                        <span className='text-[16px] sm:text-[20px] flex-shrink-0'><IoMdSearch /></span>
                        <span className='text-sm sm:text-base'>{sub.name}</span>
                      </li>
                    ))

                  ))}
                </ul>
              </div>
              <div onClick={(e) => e.stopPropagation()} className='flex-1 min-w-0 max-lg:hidden'>
                <div onClick={cancelClick} className='product grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6'>
                  {products?.slice(0, 3).map(product => (
                    <ProductCard key={product.id} data={product}  />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Search;