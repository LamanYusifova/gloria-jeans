import React, { useEffect, useState } from 'react'
import { RxDotFilled } from 'react-icons/rx'
import { FiPlus } from 'react-icons/fi'
import { Link, useParams } from 'react-router'
import { getData, getProdBySubCatId, getSubcategoriesById } from '../../services'
import ProductCard from '../Header/ProductCard'

function CategoryPage() {
  const { id } = useParams()
  const [count, setCount] = useState(8)
  const [data, setData] = useState([])
  const [shuffledData, setShuffledData] = useState([])
  const [category, setCategory] = useState(null)

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

  return (
    <>
      <div className='pt-[80px] pl-[10px] flex items-center gap-4 text-gray-600'>
        <Link to={"/"}><p className='flex items-center'><RxDotFilled /> Home</p></Link>
        <p className='flex items-center'><RxDotFilled />{category?.name}</p>
      </div>

      <h2 className='flex items-center justify-center font-bold text-[26px] p-4'>
        {category?.name}
      </h2>

      <div className='flex items-center justify-end'>
        <div className='flex items-center bg-[#f6f6f6] mr-6 gap-2 px-5 py-2 rounded-[10px] text-gray-600 mb-4'>
          <FiPlus />
          <p className='text-sm sm:text-base'>Filter</p>
        </div>
      </div>

      <div className='p-10'>
        {shuffledData?.length > 0 ? (
          <div className='product grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full'>
            {shuffledData.slice(0, count).map((product, idx) => (
              <ProductCard key={idx} data={product} />
            ))}
          </div>
        ) : (
          <p className='text-gray-500'>Bu kateqoriyada məhsul tapılmadı.</p>
        )}
      </div>
      {count < shuffledData.length && (
        <div className='flex items-center justify-center py-5'>
          <button onClick={increaseCount} className='bg-black w-[200px] py-3 px-6 text-white rounded-[50px]'>
            Load more ({shuffledData.length - count})
          </button>
        </div>
      )}
    </>
  )
}

export default CategoryPage
