import React from 'react'

function SelectSize({ sizes, onSelect }) {
    if (!sizes || sizes.length === 0) return null;

    return (
        <div onClick={e => e.stopPropagation()} className='absolute bottom-0 bg-white opacity-80 w-full py-2 flex justify-center gap-2'>
            {sizes.map((size, i) => (
                <button onClick={(e) => {
                    e.preventDefault(); // default Link davranışını dayandırır
                    onSelect(size)
                }} key={i} className='border border-gray-300 py-1 px-3'>
                    {size}
                </button>
            ))}
        </div>
    )
}

export default SelectSize
