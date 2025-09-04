import React from 'react'
import { IoCloseSharp } from 'react-icons/io5'

function SizeChart({ onClose }) {
    return (
        <div className='bg-[#0009] fixed top-0 left-0 w-full h-full z-[1022] flex items-center' onClick={onClose}>
            <div
                onClick={(e) => e.stopPropagation()}
                className='bg-[#ebe9e3] w-[330px] p-5 rounded-[10px] flex flex-col gap-4 text-[12px] absolute right-[20px] top-[20px] z-[10000]'
            >
                <div className='flex justify-between items-center mb-4'>
                    <h2 className='text-lg font-semibold'>SIZE GUIDE</h2>
                    <IoCloseSharp onClick={onClose} className='text-[28px] cursor-pointer' />
                </div>

                <table className='w-full border-collapse text-center '>
                    <thead>
                        <tr className='border-b'>
                            <th className='py-2 font-bold text-left'>Size</th>
                            <td>Height</td>
                            <td>Chest</td>
                            <td>Waist</td>
                            <td>Hip</td>
                            <td className='text-right'>Inner leg</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='border-b'>
                            <td className='py-2 font-bold text-left'>XS</td>
                            <td>167</td>
                            <td>84</td>
                            <td>68</td>
                            <td>92</td>
                            <td className='text-right'>78</td>
                        </tr>
                        <tr className='border-b'>
                            <td className='py-2 font-bold text-left'>S</td>
                            <td>170</td>
                            <td>88</td>
                            <td>72</td>
                            <td>96</td>
                            <td className='text-right'>80</td>
                        </tr>
                        <tr className='border-b'>
                            <td className='py-2 font-bold text-left'>M</td>
                            <td>173</td>
                            <td>92</td>
                            <td>76</td>
                            <td>100</td>
                            <td className='text-right'>82</td>
                        </tr>
                        <tr className='border-b'>
                            <td className='py-2 font-bold text-left'>L</td>
                            <td>176</td>
                            <td>96</td>
                            <td>80</td>
                            <td>104</td>
                            <td className='text-right'>84</td>
                        </tr>
                        <tr>
                            <td className='py-2 font-bold text-left'>XL</td>
                            <td>179</td>
                            <td>101</td>
                            <td>85</td>
                            <td>109</td>
                            <td className='text-right'>86</td>
                        </tr>
                    </tbody>
                </table>
                <span className='text-[10px] mt-3 mb-7'>
                    All measurements are in centimeters. The measurements serve as guidlines only and may vary between styles. Please note that our styles marked with UNISEX follow the men's sizing chart. For women, we recommend choosing a size smaller than you normally would.
                </span>
            </div>
        </div>
    )
}

export default SizeChart
