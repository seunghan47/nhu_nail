import React from "react";
import ReactDOM from "react-dom";

export default function Modal({ children, open, close }) {
  return ReactDOM.createPortal(
    <>
      <h1>{children}</h1>
    </>,
    document.getElementById("portal")
  );
}
