import * as React from "react";

// TODO:move styles to CSS in Js
export const SingleViewLayout : React.FunctionComponent = props => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100vw",
      height: "100vh",
      boxSizing: "border-box",
      padding: "2rem",
      overflow: "auto"
    }}
  >
  {props.children}
  </div>
);
