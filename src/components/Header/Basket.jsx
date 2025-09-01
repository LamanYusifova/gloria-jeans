import {  useState } from 'react'
import { FaRegHeart } from 'react-icons/fa6';
import { PiHandbagSimpleBold } from 'react-icons/pi';
import Emoji from './Emoji';
import { IoMdClose } from 'react-icons/io';

function Basket({ setBasketPopUp, basketPopUp, setEmojiPopUp, emojiPopUp  }) {

    const [basketToggled, setBasketToggled] = useState(false);

    const handleSecondClick = () => {
        setBasketToggled(!basketToggled)
    }

    const login1Click = () => {
        setEmojiPopUp(true) 
        setBasketPopUp(false); 
    }

    const firstWidth = basketToggled ? 80 : 20
    const secondWidth = basketToggled ? 20 : 80

    

    return (
        <>
            {basketPopUp && (
                <div className='bg-[#0009] fixed top-0 left-0 w-full h-full z-[1000] flex justify-center items-center ' onClick={() => setBasketPopUp(false)} >
                    <div className='animate-slide-in w-[472px]  max-smm:w-full smm:right-[10px] h-[635px] lg:h-[715px]  rounded-[20px] top-14 fixed'>
                        <div className=' flex mb-3 gap-3' onClick={(e) => e.stopPropagation()}>
                            <div
                                onClick={handleSecondClick}
                                className={`rounded-[10px] p-3 ${basketToggled ? "bg-white text-black" : "bg-black text-white"} flex items-center gap-3`}
                                style={{
                                    width: `${secondWidth}%`,
                                    transition: "width 0.5s ease-in-out",
                                }}>
                                <PiHandbagSimpleBold /> {!basketToggled && <p>Basket</p>}
                            </div>
                            <div
                                onClick={handleSecondClick}
                                className={`rounded-[10px] ${basketToggled ? "bg-black text-white" : "bg-white text-black"} p-3 flex items-center gap-3 cursor-pointer`}
                                style={{
                                    width: `${firstWidth}%`,
                                    transition: "width 0.5s ease-in-out, background-color 0.3s",  
                                }}
                            >
                                <FaRegHeart /> {basketToggled && <p>Favorites</p>}
                            </div>
                            <div onClick={() => setBasketPopUp(false)} className='bg-white p-3 rounded-[10px] text-[28px] cursor-pointer'><IoMdClose /></div>
                        </div>
                         {!basketToggled && (
                            <div className='bg-white  rounded-[20px] max-smm:w-full smm:right-[10px] h-[570px] lg:h-[650px] ' onClick={(e) => e.stopPropagation()}>
                            <div className='p-5 flex flex-col gap-5 justify-between h-full '>
                                <div>
                                    <h2 className='text-[24px]'>Time to fill your cart</h2>
                                    <p >Happy shopping!</p>
                                </div>
                                <div className='flex p-5 mt-6'>
                                    <svg width="389px" height="283px" viewBox="0 0 424 274" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m111.439 136.905 15.577 16.364-5.192 21.963 134.134 14.211m-144.519-52.538 10.385-134.36 201.201 7.322M111.439 136.905l125.913 6.029m18.606 46.509-22.5-31.006 3.894-15.503m18.606 46.509L367.592 64.558l-49.327-7.752 4.76-46.94m-85.673 133.068L323.025 9.867" stroke="#000" strokeWidth="2.2" strokeLinejoin="round"></path><path d="M202.042 126.353S228.606 73.7 170.26 42.867C85.363-1.998 5.657 26.738 18.94 64.213c13.281 37.474 73.525.474 116.217 15.18 42.692 14.704 27.513 42.217 27.513 42.217" stroke="#000" strokeWidth="2.2"></path><ellipse cx="201.567" cy="125.879" rx="2.846" ry="5.692" fill="#000"></ellipse><ellipse cx="162.67" cy="122.084" rx="2.846" ry="5.692" fill="#000"></ellipse><path d="M172.157 180.904c0 27.513 44.115 111 157.487 60.718 113.371-50.282 32.256-96.769-18.5-50.282-50.757 46.487-99.141 27.513-102.936-6.641" stroke="#000" strokeWidth="2.2"></path><circle cx="155.995" cy="208.417" r="6.641" fill="#000"></circle><circle cx="182.559" cy="264.391" r="6.641" fill="#000"></circle><circle cx="88.637" cy="215.058" r="6.641" fill="#000"></circle><path d="m317.785 57.571-52.687 64.987m23.243-95.346-105.781-7.59" stroke="#000" strokeWidth="2.2"></path></svg>
                                </div>
                                <div className='flex items-center gap-5'>
                                    <button className='max-smm:px-2 smm:px-5 max-smm:text-[12px] py-2 border-2 rounded-[10px] '>View new items</button>
                                    <span className='max-smm:text-[12px]'>or</span>
                                    <button onClick={login1Click} className='max-smm:px-2 smm:px-5 max-smm:text-[12px] py-2 border-2 rounded-[10px] '>Login</button>
                                </div>
                            </div>
                        </div>
                         )}
                         {
                          basketToggled && (
                            <div className='bg-white rounded-[20px] max-smm:w-full smm:right-[10px] h-[570px] lg:h-[650px]  ' onClick={(e) => e.stopPropagation()}>
                            <div className='p-5 flex flex-col gap-5 justify-between h-full'>
                                <div>
                                    <h2 className='text-[24px]'>Cool products are waiting for likes</h2>
                                    <p>Your favorite clothes will be here</p>
                                </div>
                                <div className='flex p-5 mt-6'>
                                    <svg className='translate-y-[-50px]' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 66 102" width="72px" height="100px"><path fill="#000" stroke="#000" strokeLinejoin="round" d="M33.5.998a.5.5 0 0 0-1 0v.004l-.15 41.327c-.01 2.922-3.385 4.545-5.674 2.73L2.138 25.613l-.004-.004a.5.5 0 0 0-.626.78l.005.004 26.983 21.89a3.5 3.5 0 0 1 0 5.436L1.513 75.608l-.005.004a.5.5 0 0 0 .626.78l.004-.004L26.676 56.94c2.29-1.814 5.663-.19 5.674 2.73l.15 41.328v.004a.5.5 0 0 0 1 0v-.004l.15-41.327c.01-2.922 3.385-4.545 5.674-2.73l24.538 19.447.004.004a.5.5 0 0 0 .626-.78l-.005-.004-26.983-21.89a3.5 3.5 0 0 1 0-5.436l26.983-21.89.005-.004a.5.5 0 0 0-.626-.78l-.004.004L39.324 45.06c-2.29 1.814-5.663.19-5.674-2.73L33.5 1.001V.998Z"></path></svg>
                                    <svg className='translate-x-10 translate-y-5'  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 176 202" width="200px" height="200px"><path fill="#000" stroke="#000" strokeLinejoin="round" d="M88.5.996a.5.5 0 0 0-1 0v.008l-.791 91.727c-.023 2.668-2.903 4.33-5.224 3.016L1.651 50.57l-.007-.004a.5.5 0 0 0-.5.866l.007.004 79.043 46.55c2.298 1.353 2.298 4.677 0 6.031L1.15 150.565l-.007.004a.5.5 0 0 0 .5.866l.007-.004 79.834-45.178c2.322-1.314 5.2.348 5.224 3.016l.791 91.727v.008a.5.5 0 0 0 1 0v-.008l.791-91.727c.023-2.668 2.903-4.33 5.224-3.016l79.834 45.178.007.004a.5.5 0 0 0 .5-.866l-.007-.004-79.043-46.549c-2.298-1.354-2.298-4.678 0-6.032l79.043-46.549.007-.004a.5.5 0 0 0-.5-.866l-.007.004-79.834 45.178c-2.322 1.314-5.2-.348-5.224-3.016L88.5 1.004V.996Z"></path></svg>
                                    <svg className='translate-y-[-100px]' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 134 102" width="152px" height="100px"><path fill="#000" stroke="#000" strokeLinejoin="round" d="M67.5.992a.5.5 0 0 0-1 0l-.672 43.479c-.038 2.415-2.453 4.067-4.717 3.227L1.363 25.534l-.007-.003a.5.5 0 0 0-.355.935l.007.003L55.71 47.738c2.976 1.157 2.976 5.367 0 6.524L1.008 75.532l-.007.002a.5.5 0 0 0 .355.935l.007-.003 59.748-22.164c2.264-.84 4.68.812 4.717 3.227l.672 43.479a.5.5 0 0 0 1 0l.672-43.478c.038-2.416 2.453-4.068 4.717-3.228l59.748 22.164.007.003a.5.5 0 0 0 .355-.935l-.007-.003L78.29 54.262c-2.976-1.157-2.976-5.367 0-6.524l54.702-21.27.007-.002a.5.5 0 0 0-.355-.935l-.007.003-59.748 22.164c-2.264.84-4.68-.812-4.716-3.227L67.5.992Z"></path></svg>
                                </div>
                                <div className='flex items-center gap-5'>
                                    <button className='max-smm:px-2 smm:px-5 max-smm:text-[12px] px-5 py-2 border-2 rounded-[10px]'>View new items</button>
                                    <span className='max-smm:text-[12px]'>or</span>
                                    <button onClick={login1Click} className='px-5 py-2 border-2 rounded-[10px] max-smm:px-2 smm:px-5 max-smm:text-[12px]'>Login</button>
                                </div>
                            </div>
                        </div>
                          )  
                         }
                    </div>
                </div>
            )}
            {emojiPopUp && (
                <Emoji />
            )}
        </>
    )
}

export default Basket
