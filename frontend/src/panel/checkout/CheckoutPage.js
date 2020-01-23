import React from "react";
import $ from 'jquery';
import {Body, Header, Screen, Spinner} from "../common/Common";
import {connect} from "react-redux";
import {clearCart} from "../../actions/cartActions";

class CheckoutPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    $("form[name='test']").validate({
      'rules': {
        email: 'required'
      }
    })
  }

  render() {
    return (
      <Screen>
        <Spinner/>
        <Header>
          <a
            style={{
              position: "absolute",
              left: "10px",
              cursor: "pointer"
            }}
            onClick={() => {
              this.props.history.push('/cart');
            }}
          >
            <i className="fa fa-lg fa-arrow-circle-left"/>
          </a>
        </Header>
        <Body>
          <form
            name="test"
            action=""
            style={{
              height: "320px",
              overflowY: "scroll",
              width: "100%",
              padding: "10px"
            }}
          >
            <h3>Message for {this.props.streamer_display}</h3>
            <input
              type="text"
              placeholder="Twitch Handle"
            />
            <input
              type="text"
              placeholder="Personal Message"
            />

            <h3>Contact</h3>
            <div style={{
              display: "flex",
            }}>
              <input
                type="text"
                placeholder="First name"
              />
              <input
                style={{
                  marginLeft: "5px",
                }}
                type="text"
                placeholder="Last name"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>
            <h3>Shipping Address</h3>
            <div style={{width: "100%"}}>
              <input
                type="text"
                placeholder="Address"
              />
              <input
                type="text"
                placeholder="Address Line 2"
              />
              <input
                type="text"
                placeholder="City"
              />
              <div style={{
                display: "flex"
              }}
              >
                <select
                  placeholder="State"
                >
                  <option value="">State</option>
                  <option value="">New York</option>
                </select>
                <input
                  style={{
                    marginLeft: "5px",
                  }}
                  type="text"
                  placeholder="Zip"
                />
              </div>
              <select>
                <option value="">Country/Region</option>
                <option value="">US</option>
              </select>
            </div>
            <h3>Payments</h3>
            <div style={{width: "100%"}}>
              <input
                type="text"
                placeholder="Card Number"
              />
              <div style={{
                display: "flex",
              }}>
                <input
                  type="text"
                  placeholder="CCV"
                />
                <select
                  style={{
                    marginLeft: "5px"
                  }}
                >
                  <option value="">Mo</option>
                  <option value="">01 - Jan</option>
                </select>
                <select
                  style={{
                    marginLeft: "5px"
                  }}
                >
                  <option value="">Yr</option>
                  <option value="">2018</option>
                </select>
              </div>
            </div>
          </form>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "60px"
            }}
          >
            <button
              className="button button1"
              onClick={() => {

                let valid = $("form[name='test']").valid();
                if(valid) {
                  // check payments
                  $('.screen').toggleClass('sk-loading');
                  setTimeout(() => {
                    $('.screen').toggleClass('sk-loading');

                    // clean out cart
                    this.props.dispatch(clearCart());
                    this.props.history.push('/thank_you');
                  }, 2000);
                }
              }}
            >Pay Now
            </button>
          </div>
        </Body>
      </Screen>
    )
  }
}

const mapStateToProps = function(state) {
  return {
    streamer_display: state.settings.streamer_display,
  }
};

export default connect(mapStateToProps, null)(CheckoutPage);