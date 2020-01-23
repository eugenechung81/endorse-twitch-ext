import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App/App"
import {MemoryRouter, createMemoryHistory, Route} from "react-router";
import {Provider} from "react-redux";
import store from "./store";
import ScreenBase from "./panel/common/ScreenBase";
import ShoppingPage from "./panel/shopping/ShoppingPage";
import CartPage from "./panel/cart/CartPage";
import CheckoutPage from "./panel/checkout/CheckoutPage";
import ThankYouPage from "./panel/thank_you/ThankYouPage";
import {AnimatedSwitch} from "react-router-transition";

import './../node_modules/bootstrap/dist/css/bootstrap.css'
import './style.css'

import './../node_modules/@fortawesome/fontawesome-free/js/all.min.js'
import './../node_modules/jquery/dist/jquery.min';
import './../node_modules/jquery-validation/dist/jquery.validate.min';
import './../node_modules/popper.js/dist/popper.min.js';
import './../node_modules/bootstrap/dist/js/bootstrap.min'
import './../node_modules/bootstrap-notify/bootstrap-notify.min'

ReactDOM.render(
  <Provider store={store}>
    <MemoryRouter
      initialEntries={[
        '/test',
        '/shopping',
        '/cart',
        '/checkout',
        '/thank_you',
      ]}
      initialIndex={1}
    >
      <Route
        path="/"
        component={ScreenBase}
      />

        <AnimatedSwitch
          atEnter={{opacity: 0}}
          atLeave={{opacity: 0}}
          atActive={{opacity: 1}}
          className="switch-wrapper"
        >
          <Route
            path="/test"
            component={App}
          />
          <Route
            path="/cart"
            component={CartPage}
          />
          <Route
            path="/shopping"
            component={ShoppingPage}
          />
          <Route
            path="/checkout"
            component={CheckoutPage}
          />
          <Route
            path="/thank_you"
            component={ThankYouPage}
          />
        </AnimatedSwitch>
    </MemoryRouter>
  </Provider>,
  document.getElementById("root")
)