import Footer from './Components/Footer/Footer'
import Topbar from './Components/Topbar/Topbar' 
import  routes  from './routes'
import { useRoutes } from 'react-router-dom' 
function App() { 

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
