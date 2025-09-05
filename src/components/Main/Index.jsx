import { useEffect, useState } from 'react'
import VideoSwiper from './VideoSwiper'
import Card from './Card'
import ProductCard from '../Header/ProductCard'
import Newsletter from './Newsletter'
import SubCard from './SubCard'
import { getAllProducts } from '../../services'
import MageSwiper from './MageSwiper'
import SizeChart from './SizeChart'

function Main() {
  const cardImage = [
    { id: 1, categoryId: 1, name: "Women", img: "https://cdn.dsmcdn.com/mnresize/620/920/ty1705/prod/QC_ENRICHMENT/20250703/09/7e3dd4cb-0ce5-3698-8f71-140b547ab4fb/1_org_zoom.jpg", title: "Comfortable models in office-core aesthetics for business days" },
    { id: 2, categoryId: 8, name: "Men", img: "https://cdn.dsmcdn.com/mnresize/620/920/ty1671/prod/QC/20250505/22/6310dcfa-a0c5-364f-b8a0-33778a85f085/1_org_zoom.jpg", title: "Shirts, trousers, jumpers and other smart casual styles" },
    { id: 3, categoryId: 9, name: "Kids", img: "https://cdn.dsmcdn.com/mnresize/620/920/ty459/product/media/images/20220622/16/128893398/496628668/2/2_org_zoom.jpg", title: "College Style Models for School and Everyday Looks" },
    { id: 4, categoryId: 7, name: "Jewellery", img: "https://cdn.dsmcdn.com/mnresize/620/920/ty1728/prod/QC_ENRICHMENT/20250821/11/2e1c2a43-9472-39b5-b801-64a047f09ce9/1_org_zoom.jpg", title: "New items for kindergarten and preschool classes" },
    { id: 5, categoryId: 2, name: "Clothing", img: "https://cdn.dsmcdn.com/mnresize/620/920/ty1679/prod/QC/20250515/11/44523034-74e3-3eec-bff5-bd4c7f560038/1_org_zoom.jpg", title: "Short and long sleeves in a basic palette" },
    { id: 6, categoryId: 3, name: "Shoes", img: "https://cdn.dsmcdn.com/mnresize/620/920/ty1724/prod/QC_ENRICHMENT/20250812/17/3bf5d8c9-ad73-3dd3-98d8-c7185127a2b7/1_org_zoom.jpg", title: "Checkered, with contrasting collars and decorative slits" },
    { id: 7, categoryId: 4, name: "Bags", img: "https://cdn.dsmcdn.com/mnresize/620/920/ty1723/prod/QC_ENRICHMENT/20250812/21/97ba6128-23b8-3ba5-bc10-d74a3e6bf0bf/1_org_zoom.jpg", title: "With voluminous sleeves, oversized, with ties and ruffles" },
    { id: 8, categoryId: 5, name: "Accessories", img: "https://cdn.dsmcdn.com/mnresize/620/920/ty1502/product/media/images/prod/QC/20240823/17/d84ccfad-58e0-3204-bc52-1929afe38f0d/1_org_zoom.jpg", title: "Loose models for relaxed outfits" },
    { id: 9, categoryId: 11, name: "Nursery & baby", img: "https://cdn.dsmcdn.com/mnresize/620/920/ty1717/prod/QC_ENRICHMENT/20250730/11/f161dc5e-b933-3c0a-b566-8f294ce730e7/1_org_zoom.jpg", title: "Corduroy, pleated, checkered and skorts" },
    { id: 10, categoryId: 13, name: "Baby boys (0-3 years)", img: "https://cdn.dsmcdn.com/mnresize/620/920/ty1718/prod/QC_ENRICHMENT/20250731/13/b6b258fb-cb6c-3fdc-8845-d8ee72ba2039/1_org_zoom.jpg", title: "Comfortable models for long walks and active games" },
    { id: 11, categoryId: 12, name: "Baby Girls (0-3 years)", img: "https://cdn.dsmcdn.com/mnresize/620/920/ty1716/prod/QC_ENRICHMENT/20250731/13/bd0f30fb-dc23-3182-8cbf-3f3f27c129a8/1_org_zoom.jpg", title: "Basic and spectacular with charming prints" },
    { id: 12, categoryId: 14, name: "Girls (3-16 years)", img: "https://dfcdn.defacto.com.tr/6/D7103A8_25SM_NM28_01_04.jpg", title: "Checkered, classic, denim and thick cotton" },
  ]

  const mobileData = [
    "https://storage-cdn11.gloria-jeans.ru/cms/banners/bf/38/982_mob_OdmtVJo2p5nXLS7lSvo1.webp",
    "https://storage-cdn11.gloria-jeans.ru/cms/banners/73/0f/1027_mob_JMvk1LV6wUsqUuyAL6JN.webp",
    "https://storage-cdn11.gloria-jeans.ru/cms/banners/29/c4/1010_mob_gtCxAGOE0Gwoau32BVI0.webp",
    "https://storage-cdn11.gloria-jeans.ru/cms/banners/42/28/1008_mob_leHEHaApebBzwjORefI1.webp",
    "https://storage-cdn11.gloria-jeans.ru/cms/banners/ac/71/988_mob_JeVxX3ZIaPts78jhKUV3.webp",
    "https://storage-cdn11.gloria-jeans.ru/cms/banners/57/4f/1028_mob_H3MCMM2i2fLRJ8MsCh9R.webp",
    "https://storage-cdn11.gloria-jeans.ru/cms/banners/5d/67/1022_mob_ZqE6MGY42W904f8RCSky.webp",
    "https://storage-cdn11.gloria-jeans.ru/cms/banners/db/97/1024_mob_vehEINU6ACOxIcZQzuW6.webp",
    "https://storage-cdn11.gloria-jeans.ru/cms/banners/82/a3/1019_mob_d55E6xHuVHh2AgnaRh6U.webp"
  ]

  const desktopData = [
    "https://storage-cdn11.gloria-jeans.ru/cms/banners/ac/e2/982_desk_A7tx6O7mgebupaXYRa3n.webp",
    "https://storage-cdn11.gloria-jeans.ru/cms/banners/3c/3f/1027_desk_GSv1ejz1SMA7Hy1yZpFH.webp",
    "https://storage-cdn11.gloria-jeans.ru/cms/banners/da/77/1010_desk_KVn2sA4HMYP0wzAedng0.webp",
    "https://storage-cdn11.gloria-jeans.ru/cms/banners/ad/58/1008_desk_OM0xTSy6FuVa9JyFX1wY.webp",
    "https://storage-cdn11.gloria-jeans.ru/cms/banners/a3/e3/988_desk_sTIjY6HkvXN9BFqWmYV0.webp",
    "https://storage-cdn11.gloria-jeans.ru/cms/banners/7e/38/1028_desk_Yg2XY1pTY3EHSJeucjie.webp",
    "https://storage-cdn11.gloria-jeans.ru/cms/banners/4c/69/1022_desk_EGmtHVXGNNUT2G3xL4xh.webp",
    "https://storage-cdn11.gloria-jeans.ru/cms/banners/07/d6/1024_desk_tDehDiMXn6GxBI6qt05E.webp",
    "https://storage-cdn11.gloria-jeans.ru/cms/banners/57/95/1019_desk_Fn8wMPmVtofpAnmbtBYH.webp"
  ]

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true) // loading state

  useEffect(() => {
    getAllProducts().then(res => {
      setProducts(res)
      setLoading(false) // data gələndə loading bitir
    })
  }, [])

  if (loading) {
    return (
      <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-purple-600"></div>
      </div>
    )
  }

  return (
    <>
      <VideoSwiper />
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-10">
        <Card cardImage={cardImage.slice(0, 4)} />
      </div>
      <MageSwiper mobileData={mobileData.slice(0, 4)} desktopData={desktopData.slice(0, 4)} />
      <p className='text-center pt-20 text-[26px]'>Women</p>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-10">
        <SubCard cardImage={cardImage.slice(4, 8)} />
      </div>

      <MageSwiper mobileData={mobileData.slice(4, 9)} desktopData={desktopData.slice(4, 9)} />
      <p className='text-center pt-20 text-[26px]'>Kids</p>
      <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-10'>
        <SubCard cardImage={cardImage.slice(8, 12)} />
      </div>
      <div className='product grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-10'>
        {products?.slice(0, 3).map(product => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>
      <Newsletter />
    </>
  )
}

export default Main
