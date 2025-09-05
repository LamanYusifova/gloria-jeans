import React from 'react'

function SupportServices() {

    const countries = [
        { name: 'Azerbaijan', phone: '+994 77 565 55 55' },
        { name: 'Turkey', phone: '+90 531 123 45 67' },
        { name: 'Germany', phone: '+49 160 12345678' },
        { name: 'France', phone: '+33 6 12 34 56 78' },
    ]
    
    return (
        <>
            <div className="absolute top-[55px] right-[152px] max-lg:right-[11px] grid grid-cols-1 gap-2 py-4 px-2 w-[160px] rounded-[10px] mx-auto bg-white h-[200px]">
                {countries.map((country, index) => (
                    <div
                        key={index}
                        className="relative w-full text-white rounded-lg overflow-hidden cursor-pointer group flex items-center justify-center hover:bg-[#f9f9f9] hover:rounded-[5px]"
                    >
                        <span className="absolute transition-all duration-500 text-black group-hover:-translate-x-full group-hover:opacity-0 text-lg text-[14px] py-3">
                            {country.name}
                        </span>
                        <span className="absolute opacity-0 translate-x-full text-black transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 text-lg text-[14px] py-3">
                            {country.phone}
                        </span>
                    </div>
                ))}
            </div>
        </>
    )
}

export default SupportServices
