import { useEffect, useState } from "react"
import { IoMdSearch } from "react-icons/io"
import { PiHandbagSimpleBold } from "react-icons/pi"
import { FaRegHeart, FaRegFaceSmile } from "react-icons/fa6"
import { Link, useLocation } from "react-router"
import Emoji from "./Emoji"
import Heart from "./Heart"
import { TbBasketHeart } from "react-icons/tb"
import Basket from "./Basket"
import Search from "./Search"
import { MdHome } from "react-icons/md"
import { RiMenuSearchLine } from "react-icons/ri"
import { FiUser } from "react-icons/fi"
import { getData } from "../../services"

function Header() {
  const [data, setData] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [bg, setBg] = useState(false)
  const [icons, setIcons] = useState(false)
  const [emojiPopUp, setEmojiPopUp] = useState(false)
  const [heartPopUp, setHeartPopUp] = useState(false)
  const [basketPopUp, setBasketPopUp] = useState(false)
  const [activeIndex, setActiveIndex] = useState(null)

  const location = useLocation()

  // --- category path-dən isProductPage təyin olunur ---
  const categoryPathMatch = location.pathname.match(/^\/category\/([^/]+)/) || location.pathname.match(/^\/subcategory\/([^/]+)/) || location.pathname.match(/^\/details\/([^/]+)/)
  const categoryFromURL = categoryPathMatch ? categoryPathMatch[1] : null
  const isProductPage = categoryFromURL !== null

  useEffect(() => {
    getData().then(res => setData(res))
  }, [])

  useEffect(() => {
    document.body.style.overflow = (heartPopUp || emojiPopUp || basketPopUp) ? 'hidden' : 'auto'
  }, [heartPopUp, emojiPopUp, basketPopUp])

  useEffect(() => {
    const handleScroll = () => {
      const iconsEl = document.getElementById('icons')
      if (window.scrollY > 100) {
        iconsEl?.classList.add('hidden')
        setIcons(true)
      } else {
        iconsEl?.classList.remove('hidden')
        setIcons(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (activeIndex !== null) {
      const timer = setTimeout(() => {
        setActiveIndex(null)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [activeIndex])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  const closeAllPopups = () => {
    setEmojiPopUp(false)
    setHeartPopUp(false)
    setBasketPopUp(false)
    setIsOpen(false)
    setBg(false)
  }

  const togglePopUp = () => {
    closeAllPopups()
    setEmojiPopUp(!emojiPopUp)
  }

  const toggleHeartPopUp = () => {
    closeAllPopups()
    setHeartPopUp(!heartPopUp)
  }

  const toggleBasketPopUp = () => {
    closeAllPopups()
    setBasketPopUp(!basketPopUp)
  }

  const toggleDiv = () => setIsOpen(!isOpen)
  const toggleBg = () => {
    closeAllPopups()
    setBg(!bg)
  }
  document.body.style.overflow = !bg ? 'auto' : 'hidden'

  const handleSecondSearchClick = () => {
    toggleBg()
    scrollToTop()
  }

  const countries = [
    { name: 'Azərbaycan', phone: '+994 77 565 55 55' },
    { name: 'Türkiyə', phone: '+90 531 123 45 67' },
    { name: 'Almaniya', phone: '+49 160 12345678' },
    { name: 'Fransa', phone: '+33 6 12 34 56 78' },
  ]

  return (
    <>
      <header className="absolute top-[40px] left-0 w-full z-500">
        <div className={`relative ${isProductPage || bg ? 'bg-[#f9f9f9]' : 'bg-transparent'}`}>
          <nav className={`flex gap-3 justify-between items-center w-full h-[70px] ${(isProductPage || bg) ? "border-b-[1px]" : "border-0"} border-gray-300`}>
            {/* Logo */}
            <div>
              <Link to={"/"} className={`${isProductPage || bg ? "bg-black top-0" : 'bg-transparent max-xl:top-0'} flex items-center absolute left-0 ml-3 h-full max-xl:w-[80px]`}>
                <img className={`${isProductPage || bg ? "w-[80px]" : 'w-[230px]'}`} src="/public/img/gloria_jeans_logo-removebg-preview.png" alt="logo" />
              </Link>
            </div>

            {/* Navbar */}
            <div className="flex gap-5 w-[85%] max-xl:w-[92%] justify-between items-center py-3 max-lg:justify-end">
              <ul className={`flex items-center ${isProductPage || bg ? "ml-0 text-black" : 'ml-5 text-white'} text-work-sans max-lg:hidden`}>
                {data.slice(0, 4).map((item, i) => (
                  <li
                    className="group relative ml-[10px] px-[15px] py-1 max-xl:text-[12px] hover:text-black hover:bg-white hover:rounded-[10px] cursor-pointer"
                    key={i}>
                    <Link to={`/category/${item.id}`} className="text-lg" onClick={() => cancelClick()} > {item.name}</Link>
                    <div className="absolute top-[100%] left-0 text-black shadow-lg z-50 w-[300px] rounded-[20px] overflow-hidden hidden group-hover:block">
                      <ul className="bg-white mt-4 overflow-hidden rounded-[20px]">
                        {item?.Subcategory?.map(cat => (
                          <Link key={cat.id} to={`/subcategory/${cat.id}?slug=${item.name}`} onClick={() => cancelClick()} ><li className="p-4 hover:bg-gray-100 cursor-pointer transition-colors">{cat.name}</li></Link>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>



              {/* Right icons */}
              <div className="flex items-center justify-between gap-4">
                <p onClick={toggleDiv} className={`${isProductPage || bg ? "text-black" : 'text-white'} cursor-pointer max-lg:rounded-[10px] mx-5 max-lg:px-4 max-lg:border`}>
                  Support service
                </p>
                <div className={`bg-white rounded-[30px] flex items-center justify-between ${bg ? "py-1 pr-2" : "p-3"} mr-2 max-lg:hidden`}>
                  <div className={`${bg ? "bg-black w-[40px] h-[40px] rounded-full" : "bg-white"} flex items-center justify-center mx-2`}>
                    <IoMdSearch onClick={toggleBg} className={`text-[20px] ${bg ? "text-white" : "text-black"} cursor-pointer`} />
                  </div>
                  <div id="icons" className="flex gap-2 cursor-pointer">
                    <FaRegFaceSmile onClick={togglePopUp} className="text-[20px]" />
                    <FaRegHeart onClick={toggleHeartPopUp} className="text-[20px]" />
                    <PiHandbagSimpleBold onClick={toggleBasketPopUp} className="text-[20px]" />
                  </div>
                </div>
              </div>
            </div>
          </nav>

          {/* Countries dropdown */}
          {isOpen && (
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
          )}
        </div>
      </header>

      {/* Fixed top right icons */}
      <div className={`fixed top-[8px] right-[5px] z-[800] w-fit cursor-pointer flex gap-3 items-center px-3 py-1 rounded-[50px] text-[20px] max-lg:hidden transition-all duration-300 ${!icons ? 'w-[60px]' : ''}`}>
        {icons && (
          <div className="bg-white rounded-[30px] flex items-center justify-between p-4 gap-3 cursor-pointer">
            <IoMdSearch onClick={handleSecondSearchClick} className="text-[24px]" />
            <FaRegFaceSmile onClick={togglePopUp} />
            <TbBasketHeart onClick={toggleBasketPopUp} className="text-[24px]" />
          </div>
        )}
      </div>

      {/* Bottom mobile nav */}
      <div className="bg-white w-full h-[80px] fixed z-[9000] bottom-0 lg:hidden flex items-center justify-around text-[#a6a6a6]">
        <div className="flex flex-col items-center gap-1 cursor-pointer">
          <Link to={"/"}>
            <MdHome className="text-[28px]" />
            <p className="text-[11px]">Home</p>
          </Link>
        </div>
        <div onClick={() => window.scrollTo(0, 0)} className="flex flex-col items-center gap-1 cursor-pointer">
          <RiMenuSearchLine onClick={toggleBg} className="text-[28px]" />
          <p className="text-[11px]">Catalog</p>
        </div>
        <div onClick={toggleBasketPopUp} className="flex flex-col items-center gap-1 cursor-pointer">
          <PiHandbagSimpleBold className="text-[28px]" />
          <p className="text-[11px]">Basket</p>
        </div>
        <div onClick={toggleHeartPopUp} className="flex flex-col items-center gap-1 cursor-pointer">
          <FaRegHeart className="text-[26px]" />
          <p className="text-[11px]">Favorites</p>
        </div>
        <div onClick={togglePopUp} className="flex flex-col items-center gap-1 cursor-pointer">
          <FiUser className="text-[28px]" />
          <p className="text-[11px]">Profile</p>
        </div>
      </div>

      {/* Popups */}
      {bg && <Search bg={bg} setBg={setBg} />}
      {emojiPopUp && <Emoji setEmojiPopUp={setEmojiPopUp} emojiPopUp={emojiPopUp} />}
      {heartPopUp && <Heart setHeartPopUp={setHeartPopUp} heartPopUp={heartPopUp} setEmojiPopUp={setEmojiPopUp} />}
      {basketPopUp && <Basket setBasketPopUp={setBasketPopUp} basketPopUp={basketPopUp} setEmojiPopUp={setEmojiPopUp} />}
    </>
  )
}

export default Header
