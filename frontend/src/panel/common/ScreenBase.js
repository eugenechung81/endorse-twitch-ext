import React from "react";
import {fetchShoppingItems, rotateItem} from "../../actions/shoppingActions";
import {connect} from "react-redux";

class ScreenBase extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.props.fetchShoppingItems();
  }

  render() {
    return (
        <div></div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  fetchShoppingItems: () => dispatch(fetchShoppingItems()),
});


export default connect(null, mapDispatchToProps) (ScreenBase);