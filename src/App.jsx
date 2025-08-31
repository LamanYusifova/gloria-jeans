import { Route, Routes } from "react-router-dom"
import Header from "./components/Header/Index"
import AnimationHeader from "./components/Header/AnimationHeader"
import Search from "./components/Header/Search"
import Footer from "./components/Footer/Index"
import Main from "./components/Main/Index"
import HomeLayout from "./layout/HomeLayout"
import CategoryPage from "./components/Main/CategoryPage"
import SubCategory from "./components/Main/SubCategory"
import Details from "./components/Main/Details"


function App() {
  return (
    <>
    <Routes>

      <Route path="/" element={<HomeLayout />} >
        <Route index element={<Main />} />
        <Route path="/category/:id" element={<CategoryPage />} />
        <Route path="/subcategory/:id" element={<SubCategory />} />
        <Route path="/details/:id" element={<Details />} />
      </Route>


      <Route path="/search" element={<Search />} />
    </Routes>
    </>
  )
}

export default App
