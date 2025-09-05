import { Outlet } from "react-router-dom";
import Header from "./components/Header/Index";
import AnimationHeader from "./components/Header/AnimationHeader";
import Footer from "./components/Footer/Index";
import Basket from "./components/Header/Basket";
import { useState } from "react";
import { BasketProvider } from "./components/Context/BasketContext";
import { WishlistProvider } from "./components/Context/WishlistContext";
import AccordionFilter from "./components/Main/AccordionFilter";

function App() {
  const [emojiPopUp, setEmojiPopUp] = useState(false);

  return (
    <BasketProvider>
      <WishlistProvider>
          <Header />
          <AnimationHeader />
          <Outlet />
          <Footer />
          <Basket setEmojiPopUp={setEmojiPopUp} emojiPopUp={emojiPopUp} />
      </WishlistProvider>
    </BasketProvider>
  );
}

export default App;
