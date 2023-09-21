import Home from "./Pages/Home/Home"
import Basket from './Pages/Basket/Basket'
import ContactUs from "./Pages/ContactUs/ContactUs"
import Product from "./Pages/Product/Product"
let routes = [
      {
            path: '/', element: <Home />
      },
      {
            path: '/Basket', element: <Basket />
      },
      {
            path: '/ContactUs', element: <ContactUs />
      },
      {
            path: '/Product/:id', element: <Product />
      },

]


export default routes