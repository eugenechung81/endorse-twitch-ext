import React from "react";
import $ from 'jquery';
import {connect} from "react-redux";
import {Body, Header, Screen} from "../common/Common";
import {fetchShoppingItems} from "../../actions/shoppingActions";
import {addToCart, deleteItem, updateQty} from "../../actions/cartActions";

class CartPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {

  }

  render() {
    return (
      <Screen>
        <Header>
          <a
            style={{
              position: "absolute",
              left: "10px",
              cursor: "pointer"
            }}
            onClick={() => {
              this.props.history.push('/shopping');
            }}
          >
            <i className="fa fa-lg fa-arrow-circle-left"/>
          </a>
          {/*Cart*/}
        </Header>
        <Body>
          <div style={{
            paddingTop: "15px",
            height: "50px",
            fontSize: "16px",
            fontWeight: "bolder",
          }}>
            YOUR CART ({this.props.num_of_items})
          </div>
          <div style={{
            width: "100%",
            height: "250px"
          }}>{this.props.cart_items.map((c, index) => {
            return (<CartItem
              key={index}
              c={c}
              onChange={(value) => {
                this.props.updateQty(c.id, value);
              }}
              onDelete={()=> {
                this.props.deleteItem(c.id);
              }}
            />)
          })}</div>

          <div style={{
            height: "50px",
          }}>
            SubTotal: ${this.props.total}
          </div>

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
                if (this.props.num_of_items === 0) {
                  $.notify('Cart is empty!', {
                      offset: {y: 45, x: 0},
                      placement: {from: 'top'}
                    }
                  );
                }
                else {
                  this.props.history.push('/checkout');
                }
              }}
            >CHECKOUT
            </button>
          </div>
        </Body>
      </Screen>
    )
  }
}

function CartItem(props) {
  return (
    <div style={{
      height: "80px",
      // backgroundColor: "red",
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "5px",
    }}>
      <div
        style={{
          flex: "2",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/*{props.c.title}*/}
        <img
          style={{
            display: "block",
            maxWidth: "50px",
            maxHeight: "70px",
            width: "auto",
            height: "auto",
          }}
          src={props.c.img_path}
          alt=""
        />
      </div>
      <div
        style={{
          flex: "1",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          style={{
            width: "50px",
          }}
          value={props.c.quantity}
          onChange={(e)=> {
            props.onChange(e.target.value);
          }}
          type="text"
        />
      </div>
      <div
        style={{
        flex: "1",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      >
       ${props.c.cost}
      </div>
      <div
        style={{
        flex: "1",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      >
        <a
            style={{
              cursor: "pointer"
            }}
            onClick={() => {
              props.onDelete();
              // this.props.history.push('/shopping');
            }}
          >
          <i className="fa fa-lg fa-window-close"/>
        </a>
      </div>
    </div>);
}

const mapStateToProps = function(state) {
  return {
    total: state.cart.total,
    cart_items: state.cart.cart_items,
    num_of_items: state.cart.num_of_items,
  }
};

const mapDispatchToProps = dispatch => ({
  deleteItem: (id) => dispatch(deleteItem(id)),
  updateQty: (id, value) => dispatch(updateQty(id, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);