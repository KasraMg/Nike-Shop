import Footer from './Components/Footer/Footer'
import Topbar from './Components/Topbar/Topbar' 
import  routes  from './routes'
import { useLocation, useRoutes } from 'react-router-dom' 
import ScrollToUp from './Components/ScrollToUp'; 
import { useEffect } from 'react'
function App() { 

  const {pathname}=useLocation()

  useEffect(() => {
    document.documentElement.scrollTo({
      top:0,
      left:0,
      behavior:'instant'
  })
  
  }, [pathname])
  
  const router =useRoutes(routes)
  return (
    <> 
      <Topbar/>
  
        {router}
      <Footer/>
    </>


  )
}

export default App
