import { useContext, useEffect, useState } from 'react'
import { FaHeart, FaMinus, FaPlus, FaRegHeart, FaTrash } from 'react-icons/fa6';
import { PiHandbagSimpleBold } from 'react-icons/pi';
import Emoji from './Emoji';
import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-router';
import BasketSvg from './BasketSvg';
import WishlistSvg from './WishlistSvg';
import { BasketContext } from '../Context/BasketContext';
import Wishlist from './Wishlist';
import ShopingCart from './ShopingCart';
import { WishlistContext } from '../Context/WishlistContext';

function Heart({ setHeartPopUp, heartPopUp,  }) {
    const [isToggled, setIsToggled] = useState(false);
    const { wishlistData } = useContext(WishlistContext);
    
    const { basketData, setBasketData, basketPopUp, setBasketPopUp, setEmojiPopUp, emojiPopUp  } = useContext(BasketContext);
   
    
    const [loading, setLoading] = useState(false);
    const [confirmed, setConfirmed] = useState(false);
    const totalPrice = basketData.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);

    const handleConfirm = () => {
        if (loading || confirmed) return;

        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            setConfirmed(true);

            setTimeout(() => {
                setBasketData([]);
                setConfirmed(false);
            }, 1000);
        }, 1500);
    };


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
                                    <WishlistSvg setEmojiPopUp={setEmojiPopUp} emojiPopUp={emojiPopUp} />
                                ) : (
                                    <Wishlist />
                                )}
                            </div>
                        )}

                        {isToggled && (
                            <>
                                <div
                                    className={`bg-white rounded-t-[20px] max-smm:w-full smm:right-[10px] ${basketData.length === 0 ? 'lg:h-[650px] rounded-[20px]' : 'h-[570px] lg:h-[570px]'
                                        } overflow-y-scroll`} onClick={e => e.stopPropagation()}
                                >
                                    {basketData.length === 0 ? (
                                        <BasketSvg />
                                    ) : (
                                        <ShopingCart />
                                    )}
                                </div>
                                {basketData.length > 0 && (
                                    <div className='py-4 w-full flex justify-center bg-white rounded-b-[20px] px-6'>
                                        {basketData.length > 0 && (
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleConfirm();
                                                }}
                                                className={`w-full cursor-pointer py-2 px-6 rounded-[10px] transition-all duration-300 flex justify-center items-center gap-4 ${loading ? 'bg-gray-500' : 'bg-black'} text-white`}
                                            >
                                                {loading ? (
                                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                                                    </svg>
                                                ) : confirmed ? (
                                                    '🗸 Confirmed'
                                                ) : (
                                                    <>
                                                        <span>Confirm</span>
                                                        <span>{totalPrice.toFixed(2)} $</span>
                                                    </>
                                                )}
                                            </button>
                                        )}
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </div>
            )}
            {emojiPopUp && <Emoji />}
        </>
    );
}

export default Heart;
