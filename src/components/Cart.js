import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartitem = useSelector((store) => store.cart.items);
  const dispatch=useDispatch();
  const handleclearcart=()=>{
    dispatch(clearCart());
  }
  return (
    <>
      <div className="text-center m-4 p-4">
        <h1 className="text-2xl font-bold">Cart</h1>
        <button className="p-2 m-2 text-white bg-black rounded-lg" onClick={handleclearcart}>Clear Cart</button>
        {cartitem.length===0 && (<h1>Nothing in cart!!Please ad some items in cart </h1>)}
      </div>
      <div>
        {cartitem.map((item) => {
          return (
            <div
              key={item.card.info.id}
              className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
            >
              <div className="w-9/12">
                <div className="py-2">
                  <span>{item.card.info.name}</span>
                  <span>
                    - ₹
                    {item.card.info.price
                      ? item.card.info.price / 100
                      : item.card.info.defaultPrice / 100}
                  </span>
                </div>
                <p className="text-xs">{item.card.info.description}</p>
              </div>
              <div className="w-1/12 ">
                <img
                  src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/" +
                    item.card.info.imageId
                  }
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Cart;
