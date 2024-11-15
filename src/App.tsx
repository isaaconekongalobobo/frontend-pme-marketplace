import {RouterProvider, createBrowserRouter } from "react-router-dom"
import HomePage from "./pages/home/home"
import SuccessStorie from "./pages/success-storie/successStorie"
import DashboardPme from "./pages/dashboard-pme/dashboardPme"
import PmeDetails from "./pages/pme-details/pmeDetails"

const routes = createBrowserRouter ([
  {
      path: '/',
      element: <HomePage/>,
      children: []
  },
  {
    path: '/success-stories',
    element: <SuccessStorie/>,
    children: []
  },
  {
    path: '/dashboard-pme',
    element: <DashboardPme/>,
    children: []
  },
  {
    path: '/pme-details/:id',
    element: <PmeDetails/>,
    children: []
  },
]) 
function App() {
  return <RouterProvider router={routes}/>
}

export default App
