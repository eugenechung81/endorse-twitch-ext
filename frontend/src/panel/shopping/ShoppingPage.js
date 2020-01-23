import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {fetchShoppingItems, rotateItem} from "../../actions/shoppingActions";
import {addToCart} from "../../actions/cartActions";
import {Body, Screen} from "../common/Common";

class ShoppingPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    //this.props.fetchShoppingItems();
  }

  render() {
    return (
      <Screen>
        <Header {...this.props}/>
        <Body>

          <div style={{
            position: "absolute",
            top: "200px",
            left: "25px",
          }}>
            <a
              style={{
                cursor: "pointer",
              }}
              onClick={() => {
                this.props.shiftItem(-1);
              }}
            ><i className="fa fa-2x fa-chevron-left"/></a>
          </div>

          <div
            style={{
              position: "absolute",
              top: "200px",
              right: "25px",
            }}
          >
            <a
              style={{
                cursor: "pointer",
              }}
              onClick={() => {
                this.props.shiftItem(1);
              }}
            ><i className="fa fa-2x fa-chevron-right"/></a>
          </div>

          <div style={{
            height: "30px",
            marginTop: "15px",
            marginBottom: "10px",
          }}>
            <img
              style={{
                display: "block",
                maxWidth: "230px",
                maxHeight: "30px",
                width: "auto",
                height: "auto",
              }}
              src={this.props.brand_img_path}
              alt=""
            />
          </div>
          <div
            style={{
              height: "320px",
            }}
          >
            <img
              style={{
                display: "block",
                maxHeight: "230px",
                // maxWidth: "130px",
                width: "auto",
                height: "auto",
              }}
              src={this.props.img_path}
              alt=""
            />
          </div>
          <div style={{
            display: "flex",
            flexDirection: "column",
            height: "80px"
          }}>
            <button className="button button1" onClick={() => {
              this.props.onAddToCart(this.props.current_item).then(()=> {
                this.props.history.push('/cart');
              });
            }}>${this.props.cost} | ADD TO CART</button>
            <div style={{
              marginTop: "5px",
              fontSize: "11px",
              textAlign: "center",
            }}>{this.props.sponsorship_message}</div>
          </div>
        </Body>
      </Screen>
    )
  }
}

const mapStateToProps = function(state) {
  return {
    cost: state.shopping.current_item.cost,
    img_path: state.shopping.current_item.img_path,
    current_item: state.shopping.current_item,
    curr_item_index: state.shopping.curr_item_index,
    num_of_items: state.shopping.num_of_items,
    cart_num_of_items: state.cart.num_of_items,
    sponsorship_message: state.settings.sponsorship_message,
    brand_img_path: state.settings.brand_img_path,
  }
};

const mapDispatchToProps = dispatch => ({
  onAddToCart: (current_item) => dispatch(addToCart(current_item)),
  shiftItem: (shift) => dispatch(rotateItem(shift))
});

export default connect(mapStateToProps, mapDispatchToProps) (ShoppingPage);