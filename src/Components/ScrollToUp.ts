import {useLayoutEffect} from 'react'
import { useLocation } from 'react-router-dom';

const ScrollToTop=({children}:any)=>{
    const location=useLocation() 
    useLayoutEffect(()=>{
    
        document.getElementById('root')?.scrollTo({ top: 0, behavior: 
            'smooth' 
          })
        console.log(location.pathname);
        
    },[location.pathname])
    return children
}

export default ScrollToTop