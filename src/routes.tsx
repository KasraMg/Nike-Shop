import Home from "./Pages/Home/Home"
import Basket from './Pages/Basket/Basket'
import Contact from "./Pages/Contact/Contact"
import Product from "./Pages/Product/Product"
import Products from "./Pages/Products/Products"

let routes = [
      {
            path: '/', element: <Home />
      },
      {
            path: '/Basket', element: <Basket />
      },
      {
            path: '/Contact', element: <Contact />
      },
      {
            path: '/Product/:id', element: <Product />
      },
      {
            path: '/Products', element: <Products />
      }

]
 
export default routes