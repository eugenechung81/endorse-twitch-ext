import React from "react";

export function Header(props) {
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
      {props.children}
    </div>)
}

export function Screen(props) {
  return (
    <div
      className="screen"
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {props.children}
    </div>)
}

export function Body(props) {
  return (
    <div
      style={{
        margin: "5px",
        border: "2px solid rgb(156,156,156)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        height: "400px",
        backgroundColor: "#eee",
      }}
    >
      {props.children}
    </div>
  )
}

export function Spinner() {
  return <div className="sk-spinner sk-spinner-fading-circle">
    <div className="sk-circle1 sk-circle"></div>
    <div className="sk-circle2 sk-circle"></div>
    <div className="sk-circle3 sk-circle"></div>
    <div className="sk-circle4 sk-circle"></div>
    <div className="sk-circle5 sk-circle"></div>
    <div className="sk-circle6 sk-circle"></div>
    <div className="sk-circle7 sk-circle"></div>
    <div className="sk-circle8 sk-circle"></div>
    <div className="sk-circle9 sk-circle"></div>
    <div className="sk-circle10 sk-circle"></div>
    <div className="sk-circle11 sk-circle"></div>
    <div className="sk-circle12 sk-circle"></div>
  </div>;
}