import { useState, useEffect, useMemo } from 'react'
import { IoMdSearch } from 'react-icons/io'
import ProductCard from './ProductCard'
import { getData, searchItem } from '../../services'
import { Link } from 'react-router'
import { useProducts } from '../Context/ProductContext'

function Search({ bg, setBg, cardImage }) {
  const [cancel, setCancel] = useState(false)
  const [data, setData] = useState([])
  const [products, setProducts] = useState([]) // search nəticələri
  const { searchQuery, setSearchQuery } = useProducts()
  const [showDropdown, setShowDropdown] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getData().then(res => setData(res))
  }, [])

  useEffect(() => {
    if (!searchQuery) {
      setProducts([])
      return
    }
    setLoading(true)
    const handler = setTimeout(() => {
      searchItem(searchQuery)
        .then(res => setProducts(res))
        .catch(() => setProducts([]))
        .finally(() => setLoading(false))
    }, 300) // 300ms debounce
    return () => clearTimeout(handler)
  }, [searchQuery])

  const handleChange = (e) => {
    const value = e.target.value
    setSearchQuery(value)
    setShowDropdown(value.trim().length > 0)
  }

  const cancelClick = () => {
    setCancel(true)
    setBg(false)
  }

  // Filter: name və subcategory-ə görə, təkrarsız
  const filteredResults = useMemo(() => {
    if (!products || products.length === 0) return []

    const seen = new Set()
    const results = []

    products.forEach(product => {
      // Məhsulun adı
      if (
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !seen.has(product.name)
      ) {
        results.push(product)
        seen.add(product.name)
      }

      // Məhsulun subcategoryləri
      if (product.Subcategory) {
        product.Subcategory.forEach(sub => {
          if (
            sub.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
            !seen.has(sub.name)
          ) {
            results.push({ ...product, name: sub.name }) // subcategory adı ilə göstər
            seen.add(sub.name)
          }
        })
      }
    })

    return results
  }, [products, searchQuery])

  return (
    <>
      {!cancel && (
        <div
          onClick={cancelClick}
          className="overflow-y-auto bg-[#0000005d] fixed inset-0 top-[86px] lg:top-[110px] z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="animate-slide-search bg-white lg:h-full w-full pt-6"
          >
            {/* Mobile top categories */}
            <ul className="lg:hidden flex gap-2 justify-center mt-6 max-smm1:overflow-x-scroll">
              {data.slice(0, 4).map((item, i) => (
                <li
                  key={i}
                  className="p-2 border-2 rounded-[10px] cursor-pointer"
                >
                  <Link to={`/category/${item.id}`} onClick={cancelClick}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Search input */}
            <div className="flex items-center justify-center gap-3 h-[80px] w-full">
              <span className="translate-x-12 text-[24px]"><IoMdSearch /></span>
              <input
                type="text"
                placeholder="I'm looking for..."
                value={searchQuery}
                onChange={handleChange}
                onFocus={() => searchQuery && setShowDropdown(true)}
                onBlur={() => setTimeout(() => setShowDropdown(false), 150)}
                className="w-full pl-12 pr-3 py-2 bg-[#f9f9f9] outline-none text-[16px] placeholder:text-[#a6a6a6] rounded-[10px]"
              />
              <button onClick={cancelClick} className="mr-6 cursor-pointer">Cancel</button>
            </div>

            <div className="flex flex-col lg:flex-row gap-4 bg-white lg:gap-6 px-2 sm:px-4 lg:px-12 pb-4">
              {/* Left panel */}
              <div className="w-full lg:w-[280px] xl:w-[300px] flex-shrink-0 relative">
                <ul className="space-y-1 sm:space-y-2 max-h-[300px] lg:max-h-none overflow-y-auto lg:overflow-visible">
                  {showDropdown && (
                    <div className="absolute top-0 left-0 w-full bg-white rounded mt-1 max-h-[600px] overflow-y-auto z-50 shadow-md">
                      {loading ? (
                        <div className="p-3 text-center">Loading...</div>
                      ) : filteredResults.length > 0 ? (
                        filteredResults.map(product => (
                          <div
                            key={product.id + product.name}
                            className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                          >
                            <Link
                              to={`/details/${product.id}`}
                              onClick={cancelClick}
                              className="block w-full"
                            >
                              {product.name}
                            </Link>
                          </div>
                        ))
                      ) : (
                        <div className="p-3 text-center text-gray-500">No results</div>
                      )}
                    </div>
                  )}
                </ul>
              </div>

              {/* Right panel */}
              <div className="flex-1 min-w-0 max-lg:hidden">
                <div className="product grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                  {filteredResults?.slice(0, 3).map(product => (
                    <ProductCard
                      key={product.id + product.name}
                      data={product}
                      cancelClick={cancelClick}
                      setCancel={setCancel}
                      cancel={cancel}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Search
