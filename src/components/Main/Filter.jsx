import React, { useEffect } from 'react'
import { IoClose } from 'react-icons/io5';
import AccordionItem from './AccordionFilter';
import { getAllBrands } from '../../services';

function Filter({ toggledFilter, filterPopUp }) {


    useEffect(() => {
        document.body.style.overflow = filterPopUp ? 'hidden' : 'auto';
        return () => {
            document.body.style.overflow = 'auto'; // komponent bağlananda scrollu bərpa et
        };
    }, [filterPopUp]);

    return (
        <>

            <div className='bg-[#0009] fixed top-0 left-0 w-full h-full z-[1000] flex justify-center items-center' onClick={toggledFilter}>
                <div onClick={(e) => { e.stopPropagation(); }} className='absolute md:top-4 right-0 z-[4000] w-[400px] lg:h-[700px] md:h-[620px] max-md:h-full overflow-y-scroll bg-white
                 p-5 rounded-[10px]'>
                    <div className='flex items-center justify-between px-4'>
                        <p className='text-[20px]'>Filter</p>
                        <IoClose onClick={toggledFilter} className='text-[28px] cursor-pointer' />
                    </div>
                    <AccordionItem />
                </div>
            </div>
        </>
    )
}

export default Filter
