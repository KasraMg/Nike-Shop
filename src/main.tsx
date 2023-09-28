import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom' 
import { Provider } from 'react-redux'
import store from './Redux/store.ts'
import { WavyContainer } from "react-wavy-transitions";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <WavyContainer />
        <App /> 
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
