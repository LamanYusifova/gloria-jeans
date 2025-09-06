import React, { useContext } from 'react';
import { BasketContext } from '../Context/BasketContext';

export default function BasketSvg() {
    const { heartPopUp, setHeartPopUp, setEmojiPopUp, emojiPopUp, basketPopUp, setBasketPopUp } = useContext(BasketContext);



    const login1Click = () => {
        if (setEmojiPopUp) {
            setEmojiPopUp(true);
        }
    };

    return (
        <div className='p-5 flex flex-col gap-5 justify-between h-full'>
            <div>
                <h2 className='text-[24px]'>Time to fill your cart</h2>
                <p>Happy shopping!</p>
            </div>
            <div className='flex p-5 mt-6'>
                <svg width="389px" height="283px" viewBox="0 0 424 274" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="m111.439 136.905 15.577 16.364-5.192 21.963 134.134 14.211m-144.519-52.538 10.385-134.36 201.201 7.322M111.439 136.905l125.913 6.029m18.606 46.509-22.5-31.006 3.894-15.503m18.606 46.509L367.592 64.558l-49.327-7.752 4.76-46.94m-85.673 133.068L323.025 9.867" stroke="#000" strokeWidth="2.2" strokeLinejoin="round"></path>
                    <path d="M202.042 126.353S228.606 73.7 170.26 42.867C85.363-1.998 5.657 26.738 18.94 64.213c13.281 37.474 73.525.474 116.217 15.18 42.692 14.704 27.513 42.217 27.513 42.217" stroke="#000" strokeWidth="2.2"></path>
                    <ellipse cx="201.567" cy="125.879" rx="2.846" ry="5.692" fill="#000"></ellipse>
                    <ellipse cx="162.67" cy="122.084" rx="2.846" ry="5.692" fill="#000"></ellipse>
                    <path d="M172.157 180.904c0 27.513 44.115 111 157.487 60.718 113.371-50.282 32.256-96.769-18.5-50.282-50.757 46.487-99.141 27.513-102.936-6.641" stroke="#000" strokeWidth="2.2"></path>
                    <circle cx="155.995" cy="208.417" r="6.641" fill="#000"></circle>
                    <circle cx="182.559" cy="264.391" r="6.641" fill="#000"></circle>
                    <circle cx="88.637" cy="215.058" r="6.641" fill="#000"></circle>
                    <path d="m317.785 57.571-52.687 64.987m23.243-95.346-105.781-7.59" stroke="#000" strokeWidth="2.2"></path>
                </svg>
            </div>
            <div className='flex items-center gap-5'>
                <button className='max-smm:px-2 smm:px-5 max-smm:text-[12px] py-2 border-2 rounded-[10px]'>
                    View new items
                </button>
                <span className='max-smm:text-[12px]'>or</span>
                <button
                    onClick={login1Click}
                    className='max-smm:px-2 smm:px-5 max-smm:text-[12px] py-2 border-2 rounded-[10px]'
                >
                    Login
                </button>
            </div>
        </div>
    );
}
