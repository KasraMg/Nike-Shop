 import Home from "./Pages/Home/Home"
 import Basket from './Pages/Basket/Basket'
import ContactUs from "./Pages/ContactUs/ContactUs"
let routes =[
   {
         path:'/' ,element:<Home/>
   },
   {
         path:'/Basket' ,element:<Basket/>
   },
   {
         path:'/ContactUs' ,element:<ContactUs/>
   },
    
]


export default routes