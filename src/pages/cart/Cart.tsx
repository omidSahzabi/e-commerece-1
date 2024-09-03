import CartItem from "../../components/cartItem/CartItem"
import Container from "../../components/container/Container"
import Button from "../../components/button/Button"
import {useShopingCartContext} from "../../context/ShopingCartContext"

function Cart() {

  const { cartItems } = useShopingCartContext()

  return (
    <div>
        <Container>
            <div className="grid grid-cols-4">
              {
                cartItems.map(item => (
                  <CartItem {...item} />
                ))
              }
            </div>

            <Button className="mt-2" variant="succes">
                ثبت سفارش
            </Button>
        </Container>
    </div>
  )
}

export default Cart