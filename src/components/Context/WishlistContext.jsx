import { createContext, useState, useEffect } from 'react'

export const WishlistContext = createContext()

export const WishlistProvider = ({ children }) => {

    const [basketPopUp, setBasketPopUp] = useState(false);
    const [emojiPopUp, setEmojiPopUp] = useState(false);
    const [heartPopUp, setHeartPopUp] = useState(false);

    const [wishlistData, setWishlistData] = useState(() => {
        const saved = localStorage.getItem('wishlist')
        return saved ? JSON.parse(saved) : []
    })

    useEffect(() => {
        localStorage.setItem('wishlist', JSON.stringify(wishlistData))
    }, [wishlistData])

    const addToWishlist = (item) => {
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
        <WishlistContext.Provider value={{
            wishlistData, 
            addToWishlist, 
            removeFromWishlist, 
            basketPopUp,
            setBasketPopUp,
            emojiPopUp,
            setEmojiPopUp,
            heartPopUp,
            setHeartPopUp
        }}>
            {children}
        </WishlistContext.Provider>
    )
}
