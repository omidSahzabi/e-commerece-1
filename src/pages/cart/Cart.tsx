import CartItem from "../../components/cartItem/CartItem"
import Container from "../../components/container/Container"
import Button from "../../components/button/Button"
import {useShopingCartContext} from "../../context/ShopingCartContext"

function Cart() {

  const { cartItems } = useShopingCartContext()

  return (
    <div>
        <Container>
            <div className="">
              {
                cartItems.map(item => (
                  <CartItem {...item} />
                ))
              }
            </div>

            <div className="text-right bg-gray-200 rounded p-6 mt-5">
                <p>مبلغ کل:$60</p>
                <p>تخفیف:$5</p>
                <p>قابل پردااخت:$55</p>
            </div>

            <Button className="mt-2" variant="succes">
                ثبت سفارش
            </Button>
        </Container>
    </div>
  )
}

export default Cart