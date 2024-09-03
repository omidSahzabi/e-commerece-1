import Container from '../../components/container/Container'
import Button from '../../components/button/Button'
import { useShopingCartContext } from '../../context/ShopingCartContext'
import {useState } from 'react'

function Login() {

    const { handleLogin } = useShopingCartContext()

    const [user , setUser] = useState({
        username: "",
        password: ""
    }) 

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const {name , value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

  return (
    <div>
        <Container>
            <div className="bg-stone-900 text-white p-12 rounded flex flex-col justify-center items-center m-10 login ">
                <input onChange={handleChange} type="text" placeholder='نام کاربری'
                 name='username' value={user.username}
                 className='text-black text-right pr-2 mb-5'/>
                <input onChange={handleChange} type="password" placeholder='رمز عبور'
                 name='password' value={user.password} 
                 className='text-black text-right pr-2'/>
                <Button onClick={()=> handleLogin(user.username , user.password )}
                className='mt-5'>
                    ورود
                </Button>
            </div>
        </Container>
    </div>
  )
}

export default Login