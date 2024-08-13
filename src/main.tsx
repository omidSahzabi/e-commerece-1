import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {BrowserRouter } from 'react-router-dom'
import {ShopingCartProvider} from "../src/context/ShopingCartContext.tsx"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <ShopingCartProvider>
    <App />
    </ShopingCartProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
