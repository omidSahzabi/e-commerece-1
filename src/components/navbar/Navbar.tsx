import Button from '../button/Button'
import { Link } from 'react-router-dom'
import Container from '../container/Container'
import { useShopingCartContext } from '../../context/ShopingCartContext'

function Navbar() {

    const { cartQty , handleLogout } = useShopingCartContext()


  return (
    <div className="h-14 border-b shadow flex items-center">
        <Container>
            <div className='flex justify-between flex-row-reverse items-center'>
                <ul className='flex flex-row-reverse'>
                    <li className='ml-4'>
                        <Link to="/">خانه</Link> 
                    </li>
                    <li className='ml-4'>
                        <Link to="/store">فروشگاه</Link>
                    </li>
                </ul>

                <div>
                    <Button onClick={handleLogout}>
                        LogOut
                    </Button>
                    <Link className='relative' to="/cart">
                    <button>سبد</button>
                    {cartQty > 0 &&
                     <span className='absolute w-5 h-5 bg-red-600 flex justify-center
                     items-center rounded-full text-white -top-4 -right-5 p-3'>{cartQty}
                     </span>
                     }
                    </Link>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Navbar