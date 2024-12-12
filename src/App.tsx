import {RouterProvider, createBrowserRouter } from "react-router-dom"
import HomePage from "./pages/home/home"
import SuccessStorie from "./pages/success-storie/successStorie"
import DashboardPme from "./pages/dashboard-pme/dashboardPme"
import PmeDetails from "./pages/pme-details/pmeDetails"
import ResultatCategorie from "./pages/home/components/resultatCategorie"
import Connexion from "./pages/connexion/connexion"
import Inscription from "./pages/inscription/inscription"
import Step1 from "./pages/inscription/step-1/step1"
import Step2 from "./pages/inscription/step-2/step2"
import Step3 from "./pages/inscription/step-3/step3"
import AllCategories from "./pages/home/components/allCategories"
import Index from "./pages"

const routes = createBrowserRouter ([
  {
    path:'/', element: <Index/>
  },
  {
      path: '/home',
      element: <HomePage/>,
      children: [
        {path: 'categorie', element: <AllCategories/> },
        { path:'categorie/:categorie', element: <ResultatCategorie/> }
      ]
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
  {
    path: '/connexion',
    element: <Connexion/>
  },
  {
    path: '/inscription',
    element: <Inscription/>,
    children: [
      { path: 'inscription-step-1', element: <Step1/> },
      { path: 'inscription-step-2', element: <Step2/> },
      {path: 'inscription-step-3', element: <Step3/>}
    ]
  }
]) 
function App() {
  return <RouterProvider router={routes}/>
}

export default App
