import React, { useContext, useState, useEffect } from 'react'
import { FaHeart } from 'react-icons/fa6'
import SelectSize from './SelectSize'
import { WishlistContext } from '../Context/WishlistContext'

function Wishlist() {
    const { wishlistData, removeFromWishlist, addToBasket, heartPopUp, setHeartPopUp, setEmojiPopUp, emojiPopUp, basketPopUp, setBasketPopUp } = useContext(WishlistContext);


    // State-lərin default dəyərləri
    const [selectedSizeMap, setSelectedSizeMap] = useState({})
    const [buttonStateMap, setButtonStateMap] = useState({})
    const [showSizesMap, setShowSizesMap] = useState({})

    // Wishlist dəyişdikdə buttonStateMap-i default qiymətə ayırırıq
    useEffect(() => {
        const initialButtonState = {}
        wishlistData.forEach(item => {
            initialButtonState[item.id] = 'price'
        })
        setButtonStateMap(initialButtonState)
    }, [wishlistData])

    if (!wishlistData || wishlistData.length === 0) {
        return <p className="p-4 text-center">Wishlist is empty</p>
    }

    const handlePriceClick = (id) => {
        setShowSizesMap(prev => ({ ...prev, [id]: !prev[id] }))
    }

    const handleSizeSelect = (item, size) => {
        setSelectedSizeMap(prev => ({ ...prev, [item.id]: size }))
        setButtonStateMap(prev => ({ ...prev, [item.id]: 'loading' }))

        setTimeout(() => {
            setButtonStateMap(prev => ({ ...prev, [item.id]: 'added' }))
            addToBasket({ ...item, selectedSize: size })
            setBasketPopUp(true)

            setTimeout(() => {
                setButtonStateMap(prev => ({ ...prev, [item.id]: 'price' }))
                setShowSizesMap(prev => ({ ...prev, [item.id]: false }))
            }, 1000)
        }, 1000)
    }

    return (
        <div className='grid grid-cols-2 p-3 gap-3'>
            {wishlistData.map((item, i) => (
                <div key={i} className='relative flex flex-col gap-3 justify-between border border-gray-300 rounded-[10px] p-3'>
                    <div className='relative'>
                        <img src={item.images?.[0]} alt={item.name} className="w-full h-auto" />
                        {item.Size && showSizesMap[item.id] && (
                            <SelectSize
                                sizes={item.Size}
                                onSelect={(size) => handleSizeSelect(item, size)}
                            />
                        )}
                    </div>

                    <p>{item.name}</p>

                    <button
                        onClick={() => handlePriceClick(item.id)}
                        className={`cursor-pointer relative flex items-center justify-center w-[40%] h-10 overflow-hidden border rounded-[10px] hover:bg-black hover:text-white transition-colors`}
                    >
                        <span
                            className={`absolute w-full text-black h-full hover:text-white flex items-center justify-center transition-transform duration-300
                            ${buttonStateMap[item.id] === 'price' ? 'translate-y-0' : '-translate-y-full'}`}
                        >
                            {item.price} $
                        </span>
                        <span
                            className={`absolute w-full h-full flex items-center justify-center transition-transform duration-300
                            ${buttonStateMap[item.id] === 'loading' ? 'translate-y-0' : 'translate-y-full'}`}
                        >
                            Loading...
                        </span>
                        <span
                            className={`absolute w-full h-full flex items-center justify-center transition-transform duration-300
                            ${buttonStateMap[item.id] === 'added' ? 'translate-y-0' : 'translate-y-full'}`}
                        >
                            Added!
                        </span>
                    </button>

                    <div
                        className='absolute right-4 top-2 cursor-pointer'
                        onClick={() => removeFromWishlist(item.id, selectedSizeMap[item.id])}
                    >
                        <FaHeart />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Wishlist
