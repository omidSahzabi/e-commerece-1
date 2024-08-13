import { Navigate, Outlet } from 'react-router-dom'
import { useShopingCartContext } from '../../context/ShopingCartContext'

function PrivteRoute() {

    const {isLogin} = useShopingCartContext()

  return <> { isLogin ? <Outlet /> : <Navigate to='/login' />}</>;
}

export default PrivteRoute