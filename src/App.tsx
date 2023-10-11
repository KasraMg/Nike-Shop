import Footer from './Components/Footer/Footer'
import Topbar from './Components/Topbar/Topbar'
import routes from './routes'
import { useLocation, useRoutes } from 'react-router-dom'
import ScrollToTop from './Components/ScrollToUp'
import { useEffect } from 'react';
import { initFlowbite } from 'flowbite'
function App() {

  const { pathname } = useLocation()

  useEffect(() => {
    document.body.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    initFlowbite()
  }, [])


  const router = useRoutes(routes)
  return (
    <>  
      <ScrollToTop>

        <Topbar />
        {router}
        <Footer />

      </ScrollToTop>
    </>
  )
}

export default App
