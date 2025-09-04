import React, { createContext, useState, useEffect } from 'react'

export const WishlistContext = createContext()

export const WishlistProvider = ({ children }) => {
    const [wishlistData, setWishlistData] = useState(() => {
        // İlk yükləmədə localStorage-dən oxu
        const saved = localStorage.getItem('wishlist')
        return saved ? JSON.parse(saved) : []
    })

    useEffect(() => {
        // wishlistData dəyişdikcə localStorage-i yenilə
        localStorage.setItem('wishlist', JSON.stringify(wishlistData))
    }, [wishlistData])

    const addToWishlist = (item) => {
        // Əgər məhsul artıq wishlist-də yoxdursa əlavə et
        setWishlistData(prev => {
            const exists = prev.some(
                i => i.id === item.id && i.selectedSize === item.selectedSize
            )
            if (exists) return prev
            return [...prev, item]
        })
    }

    const removeFromWishlist = (id, selectedSize) => {
        setWishlistData(prev =>
            prev.filter(item => !(item.id === id && item.selectedSize === selectedSize))
        )
    }

    return (
        <WishlistContext.Provider value={{ wishlistData, addToWishlist, removeFromWishlist }}>
            {children}
        </WishlistContext.Provider>
    )
}
