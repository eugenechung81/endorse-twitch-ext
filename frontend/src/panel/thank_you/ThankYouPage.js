import React from "react";
import {Body, Header, Screen} from "../common/Common";
import $ from 'jquery';
export default class extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
  }

  render() {
    return (
        <Screen>
          <Header>
            <div
              style={{
                position: "absolute",
                left: "10px",
              }}
            >
              <a
                style={{
                  cursor: "pointer",
                }}
                onClick={() => {
                  this.props.history.push('/shopping');
                }}
              ><i className="fa fa-lg fa-home"/></a>
            </div>
          </Header>
          <Body>
            <div style={{
              textAlign: "center",
            }}>
              <div style={{
                fontSize: "20px",
                fontWeight: "bolder",
                marginTop: "100px",
              }}>
                Thank You
              </div>
              <div style={{
                marginTop: "10px",
              }}>Order #: XXX</div>
              <div style={{
                marginTop: "40px",
              }}>Your Order is confirmed!</div>
              <div style={{
                marginTop: "60px",
              }}>
                <button className="button button1" onClick={()=> {
                  this.props.history.push('/shopping');
                }}>
                  Go back to Shopping
                </button>
              </div>
            </div>
          </Body>
        </Screen>
    )
  }
}
