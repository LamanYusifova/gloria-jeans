import { Outlet } from "react-router-dom";
import Header from "./components/Header/Index";
import AnimationHeader from "./components/Header/AnimationHeader";
import Footer from "./components/Footer/Index";
import Basket from "./components/Header/Basket";
import { useState } from "react";
import { BasketProvider } from "./components/Context/BasketContext";
import { WishlistProvider } from "./components/Context/WishlistContext";
import ProductsListFilter from "./components/Main/ProducListFilter";
import AccordionFilter from "./components/Main/AccordionFilter";
import { FilterProvider } from "./components/Context/FilterContext";

function App() {
  const [emojiPopUp, setEmojiPopUp] = useState(false);

  return (
    <BasketProvider>
      <WishlistProvider>
        <FilterProvider>
          <Header />
          <AnimationHeader />
          <div className="flex gap-4 mt-4 px-4">
            <AccordionFilter />
            <ProductsListFilter />
          </div>
          <Outlet />
          <Footer />
          <Basket setEmojiPopUp={setEmojiPopUp} emojiPopUp={emojiPopUp} />
        </FilterProvider>
      </WishlistProvider>
    </BasketProvider>
  );
}

export default App;
