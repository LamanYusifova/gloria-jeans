
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, Navigate, RouterProvider } from 'react-router'
import Main from './components/Main/Index.jsx'
import CategoryPage from './components/Main/CategoryPage.jsx'
import SubCategory from './components/Main/SubCategory.jsx'
import Details from './components/Main/Details.jsx'
import Error from './components/Error.jsx'


const router = createBrowserRouter([
  {
    path: '/', element: <App />, children: [
      { index: true, element: <Navigate to="/main" /> },
      { path: 'main', element: <Main /> },
      { path: 'category/:id', element: <CategoryPage /> },
      { path: 'subcategory/:id', element: <SubCategory /> },
      { path: 'details/:id', element: <Details /> },
    ]
  },
  { path: '*', element: <Error /> }
])


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />


)
