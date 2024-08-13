import { createContext, useContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { login } from "../services/api";
import { useNavigate } from "react-router-dom";


interface ICartItem{
    id: number,
    qty: number
}

interface IShopingCartProvider{
    children: React.ReactNode
}

interface IShopingCartContext{
    cartItems: ICartItem[]
    handleIncreaseProductQty: (id:number )=> void
    handleDecreasProductQty: (id:number )=> void
    getProductQty: (id:number )=> number
    handleRemoveProduct: (id:number )=> void
    cartQty: number
    isLogin: boolean
    handleLogin : (username:string , password:string)=>void
    handleLogout : ()=>void
}

export const ShopingCartContext = createContext({} as IShopingCartContext)

export const useShopingCartContext = ()=>{
    return useContext(ShopingCartContext)
}

export function ShopingCartProvider({children}:IShopingCartProvider){


    const [cartItems ,  setCartItems] = useLocalStorage<ICartItem[]>("cartItems",[])

    const handleIncreaseProductQty = (id: number) => {
        setCartItems((currentItems)=> {
            let selectedItems = currentItems.find((item) => item.id == id )

            if(selectedItems == null ){
                return[...currentItems , {id: id, qty: 1}]
            }else{
                return currentItems.map((item) =>{
                    if(item.id == id){
                        return{...item,qty: item.qty + 1 }
                    }else{
                        return item
                    }
                })
            }
        })
    }

    const handleDecreasProductQty = (id: number) => {
        setCartItems(currentItems => {
            let selectedItems = currentItems.find((item) => item.id == id );

            if(selectedItems?.qty === 1){
                return currentItems.filter((item) => item.id !== id )
            }else{
                return currentItems.map((item) =>{
                    if(item.id == id){
                        return{...item,qty: item.qty - 1 }
                    } else{
                        return item
                    }
            })
        }
    })
    }

    const getProductQty = (id:number) =>{
        return cartItems.find(item => item.id == id )?.qty || 0
    }

    const handleRemoveProduct = (id:number) => {
        setCartItems((currentItems)=> currentItems.filter(item => item.id != id ))
    }

    const cartQty = cartItems.reduce((totalQty,item)=> totalQty + item.qty ,0);

    const [ isLogin , setIsLogin ] = useState(false)

    const navigate = useNavigate()

    const handleLogin = (username:string , password:string) => {
        login(username , password).finally(()=>{
            let token = "this is token"
            localStorage.setItem("token",token)
            setIsLogin(true)
            navigate("/")
        })
    }

    const handleLogout = () => {
        setIsLogin(false)
        navigate("/login")
        localStorage.removeItem("token")
    }

    useEffect(()=>{
        let token = localStorage.getItem("token")

        if(token){
            setIsLogin(true)
        }
    },[])

    return(
        <ShopingCartContext.Provider value={{ cartItems , handleIncreaseProductQty ,
         handleDecreasProductQty ,  getProductQty , handleRemoveProduct ,cartQty , isLogin
          ,handleLogin , handleLogout}}>
            {children}
        </ShopingCartContext.Provider>
    )
}