export const initialState = {
  // This is state from const [state, dispatch] = useStateValue();
  basket: [],
  user: null,
};

// Selector
export const getBasketTotal = (basket) => {
  return basket?.reduce((amount, item) => item.price + amount, 0); // Array method reduce, with initial amount provide (0)
}; // Use optional chaining to so that if empty, error doesn't explode

const reducer = (state, action) => {
  console.log(action); // Action is dispatched from our

  switch (action.type) {
    case "ADD_TO_BASKET": // Is passed in an item
      return {
        // This is object cloning basically
        ...state, // Returns the exact same state
        basket: [...state.basket, action.item], // Plus the modified property
      }; // Modificaiton for ADD_TO_BASKET just clones the basket, then adds the new item

    case "REMOVE_FROM_BASKET": // Is passed an id
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket]; // Cloning our basket in state
      if (index >= 0) {
        // If index is found
        newBasket.splice(index, 1); // Remove the item @ the index
      } else {
        console.warn(
          `Can't remove product (id: ${action.id}) as its not in the basket`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
