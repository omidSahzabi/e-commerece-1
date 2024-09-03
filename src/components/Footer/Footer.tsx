import './Footer.css'
import logo from '../../statics/img/logo.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faTelegram} from '@fortawesome/free-brands-svg-icons'
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faArrowCircleRight} from '@fortawesome/free-solid-svg-icons'



function Footer() {
  return (
    <div className='w-full footer-wrap mt-4 mb-0'>
    <footer className='w-full footer mt-6'>
        <div className='grid grid-cols-2 '>
            <div className='mt-3 ml-4 flex'>
                <img src={logo} alt=""
                className='logo' />
                <div className='dec'>
                <h1>مزون شیک پیک</h1>
                <h2><FontAwesomeIcon icon={faArrowCircleRight} /><Link to="/store">خرید دوره</Link></h2>
                <h2><FontAwesomeIcon icon={faArrowCircleRight} /><Link to="/store">خرید لوگو</Link></h2>
                </div>
            </div>
            <div className='mt-3 footer-social '>
                <div className='mt-3 grid grid-cols-4 footer-social '>
                    <div>
                        <Link to="https://github.com/omidSahzabi"><FontAwesomeIcon icon={faWhatsapp} className='footer-icons'/></Link>
                    </div>
                    <div>
                        <Link to="https://github.com/omidSahzabi"><FontAwesomeIcon icon={faInstagram} className='footer-icons'/></Link>
                    </div>
                    <div>
                        <Link to="https://github.com/omidSahzabi"><FontAwesomeIcon icon={faTelegram} className='footer-icons'/></Link>
                    </div>
                    <div>
                        <Link to="https://github.com/omidSahzabi"><FontAwesomeIcon icon={faFacebook} className='footer-icons'/></Link>
                    </div>
                </div>
                <h1 className='social-label'>مارا در شبکه های اجتماعی دنبال کنید</h1>
            </div>
        </div>
    </footer>
    <div className='bg-black text-white flex justify-center pt-5'> 2023 &copy; all rights belong to mezoneshikpik</div>
    </div>
  )
}

export default Footer
