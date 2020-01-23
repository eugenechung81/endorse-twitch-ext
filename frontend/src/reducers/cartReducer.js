export default function reducer(state = {
  cart_items: [],
  total: 0,
  num_of_items: 0,
}, action) {
  switch (action.type) {
    case 'ADD_TO_CART': {
      let add_item = state.cart_items.filter(c => c.id === action.payload.id);
      if (add_item.length > 0) {
        // exists then update qty
        let cart_items = state.cart_items.map((c) => {
          if (c.id === action.payload.id) {
            return {
              ...c,
              quantity: c.quantity + 1
            }
          }
          return c;
        });
        let total = cart_items.reduce((p, c) => p + (c.cost * c.quantity), 0);
        return {
          ...state,
          cart_items: cart_items,
          total: total
        }
      } else {
        let cart_items = state.cart_items.concat({...action.payload, quantity: 1});
        let total = cart_items.reduce((p, c) => p + (c.cost * c.quantity), 0);
        return {
          ...state,
          cart_items: cart_items,
          total: total,
          num_of_items: cart_items.length,
        };
      }
    }
    case 'REMOVE_FROM_CART': {
      let removeItem = state.cart_items.filter(c => c.id === action.id)[0];
      let cart_items = state.cart_items.filter(c => c.id !== action.id);
      let total = cart_items.reduce((p, c) => p + (c.cost * c.quantity), 0);
      return {
        ...state,
        cart_items: cart_items,
        total: total,
        num_of_items: cart_items.length,
      };
    }
    case 'UPDATE_QTY_ON_ITEM': {
      let cart_items = state.cart_items.map((c) => {
        if (c.id === action.id) {
          return {
            ...c,
            quantity: action.quantity
          }
        }
        return c;
      });
      let total = cart_items.reduce((p, c) => p + (c.cost * c.quantity), 0);
      return {
        ...state,
        cart_items: cart_items,
        total: total
      }
    }
    case 'CLEAR_CART': {
      return {
        ...state,
        cart_items: [],
        total: 0,
        num_of_items: 0,
      }
    }
    default:
      break;
  }
  return state;
}