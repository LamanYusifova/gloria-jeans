import React, { useEffect } from 'react'
import { IoClose } from 'react-icons/io5';
import AccordionItem from './AccordionFilter';
import { getAllBrands } from '../../services';

function Filter({ toggledFilter, filterPopUp }) {
    

    useEffect(() => {
        document.body.style.overflow = filterPopUp ? 'hidden' : 'auto';
    }, [filterPopUp]);

    return (
        <>

            <div className='bg-[#0009] fixed top-0 left-0 w-full h-full z-[1000] flex justify-center items-center' onClick={toggledFilter}>
                <div onClick={(e) => { e.stopPropagation(); }} className='absolute top-4 right-0 z-[4000] w-[400px] h-[700px] overflow-y-scroll bg-white
                 p-5 rounded-[10px]'>
                    <div className='flex items-center justify-between'>
                        <p className='text-[20px]'>Filter</p>
                        <IoClose className='text-[28px]' />
                    </div>
                    <AccordionItem />
                </div>
            </div>
        </>
    )
}

export default Filter
