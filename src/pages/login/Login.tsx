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
            <div className="bg-slate-300 p-12 rounded">
                <input onChange={handleChange} type="text" placeholder='user name'
                 name='username' value={user.username}/>
                <input onChange={handleChange} type="password" placeholder='password'
                 name='password' value={user.password} />
                <Button onClick={()=> handleLogin(user.username , user.password )} >
                    login
                </Button>

            </div>
        </Container>
    </div>
  )
}

export default Login