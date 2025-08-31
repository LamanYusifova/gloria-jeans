import { useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { PiHandbagSimpleBold } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import { FaRegFaceSmile } from "react-icons/fa6";
import AnimationHeader from "./AnimationHeader";


function SectionHeader() {
  const [headerData, setHeaderData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const toggleDiv = () => {
    setIsOpen(!isOpen);
  }


  const countries = [
    { name: 'Azərbaycan', phone: '+994 77 565 55 55' },
    { name: 'Türkiyə', phone: '+90 531 123 45 67' },
    { name: 'Almaniya', phone: '+49 160 12345678' },
    { name: 'Fransa', phone: '+33 6 12 34 56 78' },
  ];

  useEffect(() => {
    fetch('https://gj-data-njr8ghvl9-lamanyusifovas-projects.vercel.app/ProductData.json')
      .then(res => res.json())
      .then(data => setHeaderData(data)
      )
  }, []);

  return (
    <>
    <div className="h-[50px] bg-[#3333334e] opacity-50"></div>
      <header className="bg-[#f9f9f9] h-[68px]" >
        <nav className="flex gap-3  justify-between items-center relative ">
          <div>
            <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center absolute left-0 top-0 ml-4 ">
              <img className="h-[68px] w-[70px]" src="/public/img/favicon.ico" alt="" />
            </a>
          </div>
          <div className="flex gap-5 w-[85%] max-xl:w-[92%] justify-between items-center py-3 max-lg:justify-end">
            <ul className="flex items-center  text-work-sans max-lg:hidden  ">
              {Array(6).fill(0).map((_, i) => <li key={i} className="ml-[10px] px-[10px] max-xl:text-[12px]  " >
                <a href="#" className="text-black text-lg ">Women</a>
              </li>)}


            </ul>

            <div className="flex items-center justify-between gap-3 ">
              <div onClick={toggleDiv} className="relative">
                <p className="text-black cursor-pointer max-lg:rounded-[10px] mx-5 max-lg:px-4 max-lg:border">Support service</p>
              </div>
              <div className="cursor-pointer flex gap-4 bg-white items-center p-3 mr-6 rounded-[50px] text-[20px] max-lg:hidden">
                <IoMdSearch />
                <FaRegFaceSmile />
                <FaRegHeart />
                <PiHandbagSimpleBold />
              </div>
            </div>
          </div>
        </nav>
        {isOpen && (
          <div className="absolute top-[100px] right-[180px] max-lg:right-[11px] grid grid-cols-1 gap-2 py-4 px-2 w-[160px] rounded-[10px] mx-auto bg-white h-[200px]  ">
            {countries.map((country, index) => (
              <div
                key={index}
                className={`relative w-full text-white rounded-lg overflow-hidden cursor-pointer group  flex items-center justify-center hover:bg-[#f9f9f9] hover:rounded-[5px] `}
              >

                <span className="absolute transition-all duration-500 text-black group-hover:-translate-x-full group-hover:opacity-0 text-lg text-[14px] py-3">
                  {country.name}
                </span>


                <span className="absolute opacity-0 translate-x-full text-black transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 text-lg text-[14px] py-3 ">
                  {country.phone}
                </span>
              </div>
            ))}
          </div>)}
        <div>

        </div>
      </header>
    </>
  )
}

export default SectionHeader

