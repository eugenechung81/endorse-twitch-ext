import React from "react";
import $ from 'jquery';

export function addToCart(current_item) {
  $.notify('Added to cart', {
      offset: {y: 45, x: 0},
      placement: {from: 'top'}
    }
  );
  return function (dispatch) {
    dispatch({
      type: 'ADD_TO_CART',
      payload: current_item,
    });
    return Promise.resolve();
  }
}

export function deleteItem(id) {
  $.notify('Removed from cart', {
      offset: {y: 45, x: 0},
      placement: {from: 'top'}
    }
  );
  return {
    type: 'REMOVE_FROM_CART',
    id: id,
  }
}

export function updateQty(id, value) {
  let qty = parseInt(value);
  if (Number.isNaN(qty))
    qty = 0;
  return {
    'type': 'UPDATE_QTY_ON_ITEM',
    'id': id,
    'quantity': qty,
  }
}

export function clearCart() {
  return {
    'type': 'CLEAR_CART',
  }
}