import React, { useEffect } from 'react'
import { IoClose } from 'react-icons/io5';
import AccordionItemSearch from './AccordionItemSearch';

function SearchSubCat({ openSubCategories, setSearchBurgerMenu, searchBurgerMenu, cancelClick }) {

    useEffect(() => {
        document.body.style.overflow = (searchBurgerMenu) ? 'hidden' : 'auto';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [searchBurgerMenu]);

    return (
        <div
            className="bg-[#0009] fixed top-0 left-0 w-full h-full z-[1000] flex justify-center items-center"
            onClick={openSubCategories || (() => setSearchBurgerMenu?.(false))}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="animate-slide-in absolute md:top-4 right-0 z-[4000] w-[400px] lg:h-[700px] md:h-[620px] max-md:h-full overflow-y-scroll bg-white p-5 rounded-[10px]"
            >
                <div className="flex items-center justify-between px-4">
                    <p className="text-[20px]">Categories</p>
                    <IoClose
                        onClick={openSubCategories || (() => setSearchBurgerMenu?.(false))}
                        className="text-[28px] cursor-pointer"
                    />
                </div>
                <AccordionItemSearch openSubCategories={openSubCategories} searchBurgerMenu={searchBurgerMenu} setSearchBurgerMenu={setSearchBurgerMenu} cancelClick={cancelClick} />
            </div>
        </div>
    );
}

export default SearchSubCat;
