import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// function Apps() {
//   return (
//     <div className=" flex gap-16">
//       <div className=" bg-[url('/b1.png')] relative rounded-full mt-36 bg-center bg-cover w-48 h-48 border-2 before:absolute before:bg-black before:-z-10 before:translate before:transform before:w-[11.8rem] before:h-[11.8rem] before:scale-[1.17] before:rounded-full before:transition-all before:duration-700  hover:before:scale-0 ease-in before:inset-0 transition duration-700 "></div>

//       <div className=" relative rounded-full mt-36 bg-center bg-cover w-48 h-48 border-2 before:absolute before:bg-black before:-z-10 before:translate before:transform before:w-[11.8rem] before:h-[11.8rem] before:scale-[1.17] before:rounded-full before:transition-all before:duration-700  hover:before:scale-105 ease-in before:inset-0 transition duration-700 ">
//         <img src="/b1.png" alt="" className=" object-cover object-center" />
//       </div>
//     </div>
//   );
// }
