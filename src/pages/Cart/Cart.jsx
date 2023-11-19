import './styles.css'
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import TrashCan from './assets/TrashCan.svg'


const Cart = () => {

    const {cart} = useContext(CartContext)



  return (
    <div>
        
        {
            cart.map((item) => (
                <div className="item-on-cart" key={item.id}>
                    <div>
                        <img className='img-on-cart' src={item.image} alt={item.title}/>
                    </div>
                    <h2>{item.title}</h2>
                    <p>Quantity: {item.quantity}</p>
                    <p>Price: ${item.price}</p>
                    <p>Total: ${item.price * item.quantity}</p>
                    <div>
                        <img className="trash-can" src={TrashCan}/>
                    </div>
                    
                </div>  
            ))
        }

    </div>
  )
}

export default Cart