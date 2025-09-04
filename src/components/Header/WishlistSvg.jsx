import React from 'react'

export default function WishlistSvg() {

    const loginClick = () => {
        setEmojiPopUp(true);
        setHeartPopUp(false);
    };

    return (
        <>
           

                <div className='p-5 flex flex-col gap-5 justify-between h-full'>
                    <div>
                        <h2 className='text-[24px]'>Cool products are waiting for likes</h2>
                        <p>Your favorite clothes will be here</p>
                    </div>
                    <div className='flex p-5 mt-6'>
                        <svg className='translate-y-[-50px]' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 66 102" width="72px" height="100px"><path fill="#000" stroke="#000" strokeLinejoin="round" d="M33.5.998a.5.5 0 0 0-1 0v.004l-.15 41.327c-.01 2.922-3.385 4.545-5.674 2.73L2.138 25.613l-.004-.004a.5.5 0 0 0-.626.78l.005.004 26.983 21.89a3.5 3.5 0 0 1 0 5.436L1.513 75.608l-.005.004a.5.5 0 0 0 .626.78l.004-.004L26.676 56.94c2.29-1.814 5.663-.19 5.674 2.73l.15 41.328v.004a.5.5 0 0 0 1 0v-.004l.15-41.327c.01-2.922 3.385-4.545 5.674-2.73l24.538 19.447.004.004a.5.5 0 0 0 .626-.78l-.005-.004-26.983-21.89a3.5 3.5 0 0 1 0-5.436l26.983-21.89.005-.004a.5.5 0 0 0-.626-.78l-.004.004L39.324 45.06c-2.29 1.814-5.663.19-5.674-2.73L33.5 1.001V.998Z"></path></svg>
                        <svg className='translate-x-10 translate-y-5' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 176 202" width="200px" height="200px"><path fill="#000" stroke="#000" strokeLinejoin="round" d="M88.5.996a.5.5 0 0 0-1 0v.008l-.791 91.727c-.023 2.668-2.903 4.33-5.224 3.016L1.651 50.57l-.007-.004a.5.5 0 0 0-.5.866l.007.004 79.043 46.55c2.298 1.353 2.298 4.677 0 6.031L1.15 150.565l-.007.004a.5.5 0 0 0 .5.866l.007-.004 79.834-45.178c2.322-1.314 5.2.348 5.224 3.016l.791 91.727v.008a.5.5 0 0 0 1 0v-.008l.791-91.727c.023-2.668 2.903-4.33 5.224-3.016l79.834 45.178.007.004a.5.5 0 0 0 .5-.866l-.007-.004-79.043-46.549c-2.298-1.354-2.298-4.678 0-6.032l79.043-46.549.007-.004a.5.5 0 0 0-.5-.866l-.007.004-79.834 45.178c-2.322 1.314-5.2-.348-5.224-3.016L88.5 1.004V.996Z"></path></svg>
                        <svg className='translate-y-[-100px]' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 134 102" width="152px" height="100px"><path fill="#000" stroke="#000" strokeLinejoin="round" d="M67.5.992a.5.5 0 0 0-1 0l-.672 43.479c-.038 2.415-2.453 4.067-4.717 3.227L1.363 25.534l-.007-.003a.5.5 0 0 0-.355.935l.007.003L55.71 47.738c2.976 1.157 2.976 5.367 0 6.524L1.008 75.532l-.007.002a.5.5 0 0 0 .355.935l.007-.003 59.748-22.164c2.264-.84 4.68.812 4.717 3.227l.672 43.479a.5.5 0 0 0 1 0l.672-43.478c.038-2.416 2.453-4.068 4.717-3.228l59.748 22.164.007.003a.5.5 0 0 0 .355-.935l-.007-.003L78.29 54.262c-2.976-1.157-2.976-5.367 0-6.524l54.702-21.27.007-.002a.5.5 0 0 0-.355-.935l-.007.003-59.748 22.164c-2.264.84-4.68-.812-4.716-3.227L67.5.992Z"></path></svg>
                    </div>
                    <div className='flex items-center gap-5'>
                        <button className='px-5 py-2 border-2 rounded-[10px]'>
                            View new items
                        </button>
                        <span>or</span>
                        <button onClick={loginClick} className='px-5 py-2 border-2 cursor-pointer rounded-[10px]'>
                            Login
                        </button>
                    </div>
                </div>
           
        </>
    )
}
