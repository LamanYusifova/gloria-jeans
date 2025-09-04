import { Outlet, useParams } from "react-router-dom";
import Header from "./components/Header/Index";
import AnimationHeader from "./components/Header/AnimationHeader";
import Search from "./components/Header/Search";
import Footer from "./components/Footer/Index";
import ShopingCart from "./components/Header/ShopingCart";
import { useEffect, useState } from "react";
import Basket from "./components/Header/Basket";
import { getProdForDetails } from "./services";
import { BasketProvider } from "./components/Header/BasketContext";
import { WishlistProvider } from "./components/Header/WishlistContext";

function App() {



  const arr = [
    { id: '1', name: 'khdbkashdo', img: "https://telefonclubb.s3.eu-central-1.amazonaws.com/1727684666141-292176-8d3126632b538a34d780622cb5d47a06.jpg", price: 8658, size: 'S', quant: '1' },
    { id: '2', name: 'khdbkashdo', img: "https://telefonclubb.s3.eu-central-1.amazonaws.com/1727684666141-292176-8d3126632b538a34d780622cb5d47a06.jpg", price: 8658, size: 'M', quant: '1' },
    { id: '3', name: 'khdbkashdo', img: "https://telefonclubb.s3.eu-central-1.amazonaws.com/1727684666141-292176-8d3126632b538a34d780622cb5d47a06.jpg", price: 8658, size: 'L', quant: '1' },

  ]

  const [emojiPopUp, setEmojiPopUp] = useState(false);



  return (
    <>
      <BasketProvider>
        <WishlistProvider>
          <Header />
          <AnimationHeader />
          <Outlet /> {/* Yalnız buradan route-lar render olunacaq */}
          <Footer />

          <Basket setEmojiPopUp={setEmojiPopUp} emojiPopUp={emojiPopUp} />
        </WishlistProvider>

      </BasketProvider>
    </>
  );
}

export default App;
