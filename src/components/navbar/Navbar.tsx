import Button from '../button/Button'
import { Link } from 'react-router-dom'
import Container from '../container/Container'
import { useShopingCartContext } from '../../context/ShopingCartContext'
import logo from '../../statics/img/logo.png'
import './Navbar.css'

function Navbar() {

    const { cartQty , handleLogout } = useShopingCartContext()


  return (
    <div className="h-14 border-b shadow flex items-center bg-stone-950 text-white">
        <Container>
            <div className='flex justify-between flex-row-reverse items-center'>

                <div className='flex justify-end items-center ml-36'>
                <Link to="https://www.instagram.com/mezoneshikpik">
                    <span>مزون شیک پیک</span>
                </Link>
                <img src={logo} className='w-10' alt="" />
                </div>
                <div className='flex justify-center'>
                <ul className='flex flex-row-reverse justify-between'>
                    <li className='ml-5 '>
                        <Link className='hover-nav' to="/">خانه</Link> 
                    </li>
                    <li className='ml-5'>
                        <Link className='hover-nav' to="/store">فروشگاه</Link>
                    </li>
                    <li className='ml-5'>
                        <Link className='hover-nav' to="/about">درباره ما</Link>
                    </li>
                    <li className='ml-5 '>
                        <Link className='hover-nav' to="/store">جدید ترین ها</Link>
                    </li>
                </ul>
                </div>


                
                <div className='flex'>
                    <Link className='relative flex' to="/cart">
                    <button>
                        <img className='w-10'
                        src="https://www.iconpacks.net/icons/2/free-shopping-cart-icon-2029-thumb.png" alt="" />
                        {cartQty > 0 &&
                        <span className=' absolute w-5 h-5 bg-red-600 flex justify-center
                        items-center rounded-full text-white -top-1 -right-5 p-2'>{cartQty}
                        </span>
                        }
                    </button>
                    </Link>



                    <div className=' rounded flex justify-star ml-10 '>
                    <Button onClick={handleLogout}
                    className=' flex items-center bg-red-800'>
                        خروج
                    </Button>
                    <Link 
                    className='flex items-center pl-2'
                    to="/login">
                        ورود 
                    </Link>
                    </div>
                </div>
                

            </div>
        </Container>
    </div>
  )
}

export default Navbar