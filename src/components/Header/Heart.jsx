import { useContext, useEffect, useState } from 'react'
import { FaHeart, FaMinus, FaPlus, FaRegHeart, FaTrash } from 'react-icons/fa6';
import { PiHandbagSimpleBold } from 'react-icons/pi';
import Emoji from './Emoji';
import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-router';
import BasketSvg from './BasketSvg';
import WishlistSvg from './WishlistSvg';
import { WishlistContext } from './WishlistContext';
import { BasketContext } from './BasketContext';
import Wishlist from './Wishlist';
import ShopingCart from './ShopingCart';

function Heart({ setHeartPopUp, heartPopUp, emojiPopUp, setEmojiPopUp, basketPopUp, setBasketPopUp }) {
    const [isToggled, setIsToggled] = useState(false);
    const { wishlistData } = useContext(WishlistContext);
    const { basketData } = useContext(BasketContext);


    useEffect(() => {
        document.body.style.overflow = heartPopUp ? 'hidden' : 'auto';
    }, [heartPopUp]);

    const handleSecondDivClick = () => {
        setIsToggled(!isToggled);
    };

    const loginClick = () => {
        setEmojiPopUp(true);
        setHeartPopUp(false);
    };

    const firstWidth = isToggled ? 20 : 80;
    const secondWidth = isToggled ? 80 : 20;

    return (
        <>
            {heartPopUp && (
                <div className='bg-[#0009] fixed top-0 left-0 w-full h-full z-[1000] flex justify-center items-center' onClick={() => setHeartPopUp(false)} >
                    <div className='animate-slide-in w-[472px] max-smm:w-full smm:right-[10px] h-[635px] lg:h-[715px] rounded-[20px] top-2 fixed' onClick={(e) => e.stopPropagation()}>
                        <div className='flex mb-3 gap-3'>
                            <div
                                onClick={handleSecondDivClick}
                                className={`rounded-[10px] p-3 ${isToggled ? "bg-black text-white" : "bg-white text-black"} flex items-center gap-3`}
                                style={{
                                    width: `${secondWidth}%`,
                                    transition: "width 0.5s ease-in-out",
                                }}>
                                <PiHandbagSimpleBold /> {isToggled && <p>Basket <span>
                                </span></p>}
                            </div>
                            <div
                                onClick={handleSecondDivClick}
                                className={`rounded-[10px] ${isToggled ? "bg-white text-black" : "bg-black text-white"} p-3 flex items-center gap-3 cursor-pointer`}
                                style={{
                                    width: `${firstWidth}%`,
                                    transition: "width 0.5s ease-in-out, background-color 0.3s",
                                }}
                            >
                                <FaRegHeart /> {!isToggled && <p>Favorites</p>}
                            </div>
                            <div onClick={() => setHeartPopUp(false)} className='bg-white p-3 rounded-[10px] text-[28px] cursor-pointer'><IoMdClose /></div>
                        </div>

                        {!isToggled && (
                            <div
                                className='relative bg-white rounded-[20px] max-smm:w-full smm:right-[10px] h-[570px] lg:h-[650px] overflow-y-scroll'
                                onClick={e => e.stopPropagation()}
                            >
                                {wishlistData.length === 0 ? (
                                        <WishlistSvg />
                                    ) : (
                                        <Wishlist />
                                    )}
                            </div>
                        )}

                        {isToggled && (
                            <div
                                className='relative bg-white rounded-[20px] max-smm:w-full smm:right-[10px] h-[570px] lg:h-[650px] overflow-y-scroll'
                                onClick={e => e.stopPropagation()}
                            >
                                {basketData.length === 0 ? (
                                        <BasketSvg />
                                    ) : (
                                        <ShopingCart />
                                    )}
                            </div>
                        )}
                    </div>
                </div>
            )}
            {emojiPopUp && <Emoji />}
        </>
    );
}

export default Heart;
