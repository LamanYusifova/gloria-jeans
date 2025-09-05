import React, { useEffect, useState } from 'react'
import { RxDotFilled } from 'react-icons/rx'
import { FiPlus } from 'react-icons/fi'
import { Link, useParams, useLocation } from 'react-router'
import { getData, getProdForCategory, getSubcategoriesById } from '../../services'
import ProductCard from '../Header/ProductCard'

function SubCategory() {
    const { id } = useParams()

    const [data, setData] = useState([])
    const [name1, setName1] = useState('')
    const [categoryId, setCategoryId] = useState(null);
    const [categoryName, setCategoryName] = useState('');
    const [subCategory, setSubCategory] = useState(null)
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const slug = params.get("slug");

    useEffect(() => {
        getData().then(res => {
            setData(res)
        })
    }, [])

    useEffect(() => {
        getProdForCategory(id).then(res => {
            setSubCategory(res)
        })
    }, [id])

    useEffect(() => {
        data.forEach(item => {
            item.Subcategory?.forEach(sub => {
                if (sub.id === Number(id)) {
                    setName1(sub.name);
                    setCategoryId(item.id);
                    setCategoryName(item.name);
                }
            });
        });
    }, [data, id]);

    return (

        <>


            {/* Breadcrumb */}
            <div className='pt-[80px] pl-[10px] flex items-center gap-4 text-gray-600'>
                <Link to={"/"}><p className='flex items-center'><RxDotFilled /> Home</p></Link>
                <Link to={`/category/${categoryId}`}><p className='flex items-center'><RxDotFilled />{categoryName}</p></Link>
                <p className='flex items-center'><RxDotFilled />{name1}</p>
            </div>

            {/* Başlıq */}
            <h2 className='flex items-center justify-center font-bold text-[26px] p-4'>
                {name1}
            </h2>

            <div className='flex items-center justify-end'>
                <div className='flex items-center bg-[#f6f6f6] mr-6 gap-2 px-5 py-2 rounded-[10px] text-gray-600 mb-4'>
                    <FiPlus />
                    <p className='text-sm sm:text-base'>Filter</p>
                </div>
            </div>



            {/* Məhsullar */}
            <div className='p-10'>
                {subCategory?.data?.length > 0 ? (
                    <div className='product grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full'>
                        {subCategory.data.map((product, i) => <ProductCard key={i} data={product} />)}
                    </div>
                ) : (
                    <p className='text-gray-500'>Bu kateqoriyada məhsul tapılmadı.</p>
                )}
            </div>
        </>
    )
}

export default SubCategory
