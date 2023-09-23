import {useEffect} from 'react'
import { useLocation } from 'react-router-dom'
export default function ScrollToUp() {
const {pathname}=useLocation()

useEffect(() => {
document.documentElement.scrollTo(0,0)

}, [pathname])
return null
}
