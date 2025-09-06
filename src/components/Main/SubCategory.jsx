import React, { useEffect, useState } from 'react'
import { RxDotFilled } from 'react-icons/rx'
import { FiPlus } from 'react-icons/fi'
import { Link, useParams, useLocation } from 'react-router'
import { getData, getProdForCategory } from '../../services'
import ProductCard from '../Header/ProductCard'
import Filter from './Filter'
import { useProducts } from '../Context/ProductContext' 

function SubCategory() {
    const { id } = useParams()
    const location = useLocation()
    const params = new URLSearchParams(location.search)
    const slug = params.get("slug")

    const { filters } = useProducts() 

    const [data, setData] = useState([])
    const [name1, setName1] = useState('')
    const [categoryId, setCategoryId] = useState(null)
    const [categoryName, setCategoryName] = useState('')
    const [subCategory, setSubCategory] = useState([])
    const [filterPopUp1, setFilterPopUp1] = useState(false)

    const toggledFilter1 = () => setFilterPopUp1(!filterPopUp1)

    useEffect(() => {
        getData().then(res => {
            setData(res)
        })
    }, [])

    useEffect(() => {
        getProdForCategory(id).then(res => {
            if (res?.data) {
                setSubCategory(res.data)
            }
        })
    }, [id])
    { subCategory }

    useEffect(() => {
        data.forEach(item => {
            item.Subcategory?.forEach(sub => {
                if (sub.id === Number(id)) {
                    setName1(sub.name)
                    setCategoryId(item.id)
                    setCategoryName(item.name)
                }
            })
        })
    }, [data, id])

    const selBrands = Array.isArray(filters?.brands) ? filters.brands : []
    const selSizes = Array.isArray(filters?.sizes) ? filters.sizes : []
    const selColors = Array.isArray(filters?.colors) ? filters.colors : []

    const normalized = v => String(v || '').toLowerCase()

    const filteredProducts = subCategory.filter(product => {
        const byBrand =
            selBrands.length === 0 ||
            selBrands.map(normalized).includes(normalized(product?.Brands?.name))

        const bySize =
            selSizes.length === 0 ||
            (Array.isArray(product?.Size) && product.Size.some(s => selSizes.map(normalized).includes(normalized(s))))

        const byColor =
            selColors.length === 0 ||
            (Array.isArray(product?.Colors) && product.Colors.some(c => selColors.map(normalized).includes(normalized(c))))

        return byBrand && bySize && byColor
    })

    return (
        <>
            <div className='pt-[80px] pl-[10px] flex items-center gap-4 text-gray-600'>
                <Link to={"/"}><p className='flex items-center'><RxDotFilled /> Home</p></Link>
                <Link to={`/category/${categoryId}`}><p className='flex items-center'><RxDotFilled />{categoryName}</p></Link>
                <p className='flex items-center'><RxDotFilled />{name1}</p>
            </div>

            <h2 className='flex items-center justify-center font-bold text-[26px] p-4'>
                {name1}
            </h2>

            <div className='flex items-center justify-end'>
                <div
                    onClick={toggledFilter1}
                    className='cursor-pointer flex items-center bg-[#f6f6f6] mr-6 gap-2 px-5 py-2 rounded-[10px] text-gray-600 mb-4'
                >
                    <FiPlus />
                    <p className='text-sm sm:text-base'>Filter</p>
                </div>
            </div>

            <div className='p-10'>
                {filteredProducts?.length > 0 ? (
                    <div className='product grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full'>
                        {filteredProducts.map((product, i) => (
                            <ProductCard key={i} data={product} />
                        ))}
                    </div>
                ) : (
                    <div className=' product grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full'>
                        {[...Array(8)].map((_, idx) => (
                            <div key={idx} className="flex flex-col m-8 rounded shadow-md w-60 sm:w-80 animate-pulse h-[500px] border border-gray-300">
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

            {filterPopUp1 && (
                <Filter
                    filterPopUp1={filterPopUp1}
                    setFilterPopUp1={setFilterPopUp1}
                    hideCategory 
                />
            )}
        </>
    )
}

export default SubCategory
