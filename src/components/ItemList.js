import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const ItemList = ({ items }) => {
  // console.log(items);
  const dispatch = useDispatch();
  const handleclick = (item) => {
    //addItem ma je moklyu che e action.payload che have aapn ne em thay ke jya cartSlice ma aapde addItem nu reducer lakhyu che tya state pela lakhyu che ane ahi aapde action pela moklie chie to te redux automatic kari lese e aane action tarike j lese ane aapde tya action.payload thi teno use kari saksu
    dispatch(addItem(item));
  };
  return (
    <>
      <div>
        {items.map((item) => {
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
              <div className="w-3/12 p-4">
                <div className="absolute">
                  <button
                    className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg"
                    onClick={() => 
                      handleclick(item)
                    }
                  >
                    Add+
                  </button>
                </div>
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
export default ItemList;
