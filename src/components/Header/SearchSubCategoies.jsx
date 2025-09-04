import React, { useEffect, useState } from 'react'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { getData } from '../../services'
import { Link } from 'react-router'

function SearchSubCategories({ cancelClick, categoryId, searchSubCategories, setSearchSubCategories }) {
    const [category, setCategory] = useState(null)

    const closeClick = () => {
        setSearchSubCategories(false)
    }

    useEffect(() => {
        getData().then(res => {
            const found = res.find(cat => cat.id === categoryId)
            setCategory(found || null)
        })
    }, [categoryId])

    return (
        <div className="fixed inset-0 top-[86px] lg:top-[110px] z-50 bg-[#0000005d] overflow-y-auto">
            <div className="bg-white animate-slide-search h-[460px] lg:h-full w-full pt-6 overflow-y-auto">
                <div className="flex w-[60%] justify-between p-5">
                    <span className="cursor-pointer" onClick={closeClick}>
                        <FaArrowLeftLong />
                    </span>
                    <h3 className="text-[20px]">{category?.name || 'Catalog'}</h3>
                </div>
                <ul>
                    {category?.Subcategory?.length > 0 ? (
                        category.Subcategory.map((sub, index) => (
                            <Link
                                key={index}
                                onClick={cancelClick}
                                to={`/subcategory/${sub.id}?category=${category?.slug}&subcategory=${sub.slug}`}
                            >
                                <li

                                    className="p-4 border-b border-gray-300 hover:bg-gray-50 cursor-pointer"
                                >
                                    {sub.name}
                                </li>
                            </Link>

                        ))
                    ) : (
                        <li className="p-4 text-gray-500">No subcategories found</li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default SearchSubCategories
