import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  // state (InitialState); But we are object destructuring
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // Dispatch the item into the data layer
    // We're passing UP our data for our product (Data we would get from a database)
    dispatch({
      // THIS IS OUR ACTION THAT GETS SENT TO THE REDUCER; dispatch calls the reducer
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
