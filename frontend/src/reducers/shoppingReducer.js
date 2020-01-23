export default function reducer(state={
  shopping_items: [],
  current_item: {
    'id': '',
    'title': '',
    'img_path': '',
    'cost': 0,
  },
  num_of_items: 0,
  curr_item_index: 0,
}, action) {
  switch(action.type) {
    case 'FETCH_SHIPPING_ITEMS':
      return {
        ...state,
        current_item: action.payload[0],
        shopping_items: action.payload,
        curr_item_index: 0,
        num_of_items: action.payload.length,
      };
    case 'ROTATE_CURRENT_ITEM':
      let curr_item_index = state.curr_item_index + action.shift;
      if(curr_item_index === -1)
        curr_item_index = state.num_of_items - 1;
      else if(curr_item_index === state.num_of_items)
        curr_item_index = 0;
      let current_item = state.shopping_items[curr_item_index];
      return {
        ...state,
        curr_item_index: curr_item_index,
        current_item: current_item,
      };
    default:
      break;
  }
  return state;
}