import axios from "axios";

export function fetchShoppingItems() {
  return function (dispatch) {
    axios.get('data/shopping_items.json')
      .then((res) => {
        dispatch({
          type: 'FETCH_SHIPPING_ITEMS',
          payload: res.data.shopping_items,
        })
      })
  }
}

export function rotateItem(shift) {
  return {
    'type': 'ROTATE_CURRENT_ITEM',
    'shift': shift,
  }
}