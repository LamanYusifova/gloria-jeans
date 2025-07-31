import { Route, Routes } from "react-router"
import Header from "./components/Header/Index"
import AnimationHeader from "./components/Header/AnimationHeader"


function App() {
  return (
    <>
    <Routes>
      <Route
        path="/"
        element={
          <>
            <AnimationHeader />
            <Header />
          </>
        }
      />
    </Routes>
    </>
  )
}

export default App
