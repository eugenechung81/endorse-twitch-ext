import React from "react";
import {withRouter} from "react-router";

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {

  }

  render() {
    return (
      <div
        style={{
          height: "30px",
          marginTop: "5px",
          display: "flex",
          justifyContent: "center",
          padding: "5px",
          backgroundColor: "white",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: "10px",
        }}>
          <i className="fa fa-lg  fa-home"/>
        </div>
        <a
          onClick={() => {
            this.props.history.push('/cart');
          }}
          style={{
            position: "absolute",
            right: "10px",
            cursor: "pointer",
        }}>
          <div style={{
            position: "absolute",
            backgroundColor: "red",
            borderRadius: "4px",
            fontSize: "11px",
            padding: "0 4px",
            right: "-5px",
            top: "-5px",
            color: "white",
            fontWeight: "700",
          }}>{this.props.cart_num_of_items}</div>
          <i className="fa fa-lg fa-shopping-cart"/>
        </a>
        {this.props.curr_item_index + 1} of {this.props.num_of_items}
      </div>
    )
  }
}

export default withRouter(Header);