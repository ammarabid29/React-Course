// import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// const anotherUser = "Ammar";
// const myElement = React.createElement(
//   "a",
//   {
//     href: "https://google.com",
//   },
//   "click me to visit google",
//   anotherUser
// );

// const anotherElement = (
//   <a href="https://google.com" target="_blank">
//     Visit Google
//   </a>
// );

createRoot(document.getElementById("root")).render(
  // myElement
  <App />
  // anotherElement
);
