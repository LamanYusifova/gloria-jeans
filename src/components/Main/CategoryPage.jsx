import React, { useEffect, useState } from 'react'
import { RxDotFilled } from 'react-icons/rx'
import { FiPlus } from 'react-icons/fi'
import { Link, useParams } from 'react-router'
import { getData, getProdBySubCatId, getSubcategoriesById } from '../../services'
import ProductCard from '../Header/ProductCard'
import Filter from './Filter'
import { useProducts } from '../Context/ProductContext' 

function CategoryPage() {
  const { id } = useParams()
  const { filters } = useProducts() 
  const [count, setCount] = useState(8)
  const [data, setData] = useState([])
  const [shuffledData, setShuffledData] = useState([])
  const [category, setCategory] = useState(null)
  const [filterPopUp, setFilterPopUp] = useState(false)

  const toggledFilter = () => setFilterPopUp(!filterPopUp)

  useEffect(() => {
    getData().then(res => {
      if (res?.data) setData(res.data)
    })
  }, [])

  useEffect(() => {
    setData([])
    setShuffledData([])
    setCategory(null)
    if (id) {
      getSubcategoriesById(id).then(res => {
        if (res) setCategory(res)
      })
    }
  }, [id])

  useEffect(() => {
    if (category?.Subcategory) {
      let allProducts = []
      Promise.all(
        category.Subcategory.map(sub =>
          getProdBySubCatId(sub.id).then(res => {
            if (res?.data) {
              allProducts = [...allProducts, ...res.data]
            }
          })
        )
      ).then(() => {
        setData(allProducts)
        setShuffledData(shuffleArray(allProducts))
      })
    }
  }, [category])

  function increaseCount() {
    setCount(prev => prev + 8)
  }

  function shuffleArray(array) {
    let shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
        ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }

  const selCats = Array.isArray(filters?.categories) ? filters.categories : []
  const selBrands = Array.isArray(filters?.brands) ? filters.brands : []
  const selSizes = Array.isArray(filters?.sizes) ? filters.sizes : []
  const selColors = Array.isArray(filters?.colors) ? filters.colors : []

  const normalized = (v) => String(v || '').toLowerCase()

  const filteredProducts = shuffledData.filter(product => {
    const byCategory =
      selCats.length === 0 ||
      selCats.map(normalized).includes(normalized(product?.subcategory?.name)) ||
      selCats.map(normalized).includes(normalized(product?.category?.name))

    const byBrand =
      selBrands.length === 0 ||
      selBrands.map(normalized).includes(normalized(product?.Brands?.name))

    const bySize =
      selSizes.length === 0 ||
      (Array.isArray(product?.Size) && product.Size.some(s => selSizes.map(normalized).includes(normalized(s))))

    const byColor =
      selColors.length === 0 ||
      (Array.isArray(product?.Colors) && product.Colors.some(c => selColors.map(normalized).includes(normalized(c))))

    return byCategory && byBrand && bySize && byColor
  })
  

  const visible = filteredProducts 

  return (
    <>
      <div className='relative'>
        <div className='pt-[80px] pl-[10px] flex items-center gap-4 text-gray-600'>
          <Link to={"/"}><p className='flex items-center'><RxDotFilled /> Home</p></Link>
          <p className='flex items-center'><RxDotFilled />{category?.name}</p>
        </div>

        <h2 className='flex items-center justify-center font-bold text-[26px] p-4'>
          {category?.name}
        </h2>

        <div onClick={toggledFilter} className='flex items-center justify-end'>
          <div className='cursor-pointer flex items-center bg-[#f6f6f6] mr-6 gap-2 px-5 py-2 rounded-[10px] text-gray-600 mb-4'>
            <FiPlus />
            <p className='text-sm sm:text-base'>Filter</p>
          </div>
        </div>

        <div className='p-10'>
          {visible?.length > 0 ? (
            <div className='product grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full'>
              {visible.slice(0, count).map((product, idx) => (
                <ProductCard key={idx} data={product} />
              ))}
            </div>
          ) : (
            <div className=' product grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full'>
              {[...Array(count)].map((_, idx) => (
                <div key={idx} className="flex flex-col m-2 mx-auto rounded shadow-md w-[300px] sm:w-80 animate-pulse h-[500px] border border-gray-300">
                  <div className=" h-[300px] rounded-t"></div>
                  <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 border border-gray-300 ">
                    <div className="border border-gray-300 w-full h-6 rounded "></div>
                    <div className="border border-gray-300 w-full h-6 rounded "></div>
                    <div className="border border-gray-300 w-3/4 h-6 rounded "></div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        {count < visible.length && (
          <div className='flex items-center justify-center py-5'>
            <button onClick={increaseCount} className='bg-black w-[200px] py-3 px-6 text-white rounded-[50px]'>
              Load more ({visible.length - count})
            </button>
          </div>
        )}
      </div>

      {filterPopUp && (
        <Filter toggledFilter={toggledFilter} filterPopUp={filterPopUp} />
      )}
    </>
  )
}

export default CategoryPage
