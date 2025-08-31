import { Outlet } from 'react-router'
import Header from '../components/Header/Index'
import AnimationHeader from '../components/Header/AnimationHeader'
import Footer from '../components/Footer/Index'

function HomeLayout() {
  return (
    <>
            <AnimationHeader />
            <Header />
            <Outlet />
            <Footer />
    </>
  )
}

export default HomeLayout
