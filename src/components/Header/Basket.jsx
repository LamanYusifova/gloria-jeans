import { useContext, useEffect, useState } from 'react';
import { FaRegHeart } from 'react-icons/fa6';
import { PiHandbagSimpleBold } from 'react-icons/pi';
import { IoMdClose } from 'react-icons/io';
import Emoji from './Emoji';
import { BasketContext } from './BasketContext';
import { WishlistContext } from './WishlistContext';
import BasketSvg from './BasketSvg';
import WishlistSvg from './WishlistSvg';
import ShopingCart from './ShopingCart';
import Wishlist from './Wishlist';

function Basket() {
    const [basketToggled, setBasketToggled] = useState(false);
    const [loading, setLoading] = useState(false);
    const [confirmed, setConfirmed] = useState(false);

    const { basketData, setBasketData, basketPopUp, setBasketPopUp, setEmojiPopUp, emojiPopUp } = useContext(BasketContext);
    const { wishlistData } = useContext(WishlistContext);

    useEffect(() => {
        document.body.style.overflow = basketPopUp ? 'hidden' : 'auto';
    }, [basketPopUp]);

    const handleSecondClick = () => setBasketToggled(!basketToggled);

    // Ümumi məbləğ
    const totalPrice = basketData.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);

    const handleConfirm = () => {
        if (loading || confirmed) return;

        setLoading(true);

        // 1.5 saniyə sonra Confirmed göstərilsin
        setTimeout(() => {
            setLoading(false);
            setConfirmed(true);

            // 1 saniyə sonra səbəti boşalt, amma popup açıq qalsın
            setTimeout(() => {
                setBasketData([]);
                setConfirmed(false);
            }, 1000);
        }, 1500);
    };


    return (
        <>
            {basketPopUp && (
                <div
                    className='bg-[#0009] fixed top-0 left-0 w-full h-full z-[1000] flex justify-center items-center'
                    onClick={() => setBasketPopUp(false)}
                >
                    <div className='animate-slide-in w-[472px] max-smm:w-full smm:right-[10px] h-[635px] lg:h-[715px] rounded-[20px] top-2 fixed'>
                        {/* Top Tabs */}
                        <div className='flex mb-3 gap-3' onClick={e => e.stopPropagation()}>
                            <div
                                onClick={handleSecondClick}
                                className={`rounded-[10px] p-3 ${basketToggled ? "bg-white text-black" : "bg-black text-white"} flex items-center gap-3`}
                                style={{ width: `${basketToggled ? 20 : 80}%`, transition: "width 0.5s ease-in-out" }}
                            >
                                <PiHandbagSimpleBold /> {!basketToggled && <p>Basket</p>}
                            </div>
                            <div
                                onClick={handleSecondClick}
                                className={`rounded-[10px] ${basketToggled ? "bg-black text-white" : "bg-white text-black"} p-3 flex items-center gap-3 cursor-pointer`}
                                style={{ width: `${basketToggled ? 80 : 20}%`, transition: "width 0.5s ease-in-out, background-color 0.3s" }}
                            >
                                <FaRegHeart /> {basketToggled && <p>Favorites</p>}
                            </div>
                            <div
                                onClick={() => setBasketPopUp(false)}
                                className='bg-white p-3 rounded-[10px] text-[28px] cursor-pointer'
                            >
                                <IoMdClose />
                            </div>
                        </div>

                        {/* Basket Content */}
                        {!basketToggled && (
                            <>
                                <div
                                    className={`bg-white rounded-t-[20px] max-smm:w-full smm:right-[10px] ${basketData.length === 0 ? 'lg:h-[650px] rounded-[20px]' : 'h-[570px] lg:h-[570px]'
                                        } overflow-y-scroll`}
                                    onClick={e => e.stopPropagation()}
                                >
                                    {basketData.length === 0 ? (
                                        <BasketSvg setEmojiPopUp={setEmojiPopUp} />
                                    ) : (
                                        <ShopingCart />
                                    )}
                                </div>
                                {basketData.length > 0 && (
                                    <div className='py-4 w-full flex flex-col items-center bg-white rounded-b-[20px]'>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleConfirm();
                                            }}
                                            className={`w-[90%] py-2 rounded-[10px] transition-all duration-300 flex justify-center items-center gap-2 ${loading ? 'bg-gray-500' : 'bg-black'
                                                } text-white`}
                                        >
                                            {loading ? (
                                                // Spinner SVG
                                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                                                </svg>
                                            ) : confirmed ? (
                                                '🗸 Confirmed'
                                            ) : (
                                                'Confirm'
                                            )}
                                        </button>

                                    </div>
                                )}
                            </>
                        )}

                        {/* Wishlist Content */}
                        {basketToggled && (
                            <div
                                className='relative bg-white rounded-[20px] max-smm:w-full smm:right-[10px] h-[570px] lg:h-[650px] overflow-y-scroll'
                                onClick={e => e.stopPropagation()}
                            >
                                {wishlistData.length === 0 ? (
                                    <WishlistSvg setEmojiPopUp={setEmojiPopUp} />
                                ) : (
                                    <Wishlist />
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

export default Basket;
