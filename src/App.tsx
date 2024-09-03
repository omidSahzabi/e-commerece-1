import { Navigate, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import Store from "./pages/store/Store"
import Layout from "./components/layout/Layout"
import Product from "./pages/product/Product"
import Cart from "./pages/cart/Cart"
import {  useShopingCartContext } from "./context/ShopingCartContext"
import PrivteRoute from "./components/privteroute/PrivteRoute"
import Login from "./pages/login/Login"
import AboutUs from "./pages/AboutUs/AboutUs"

function App() {

  const {isLogin} = useShopingCartContext()

  return (
    <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Store" element={<Store />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/login" element={isLogin ? <Navigate to="/" /> : <Login />} />
          <Route element={<PrivteRoute />}>
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
    </Layout>
  )
}

export default App
