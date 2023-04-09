import React from "react";
import AllRoutes from "./Routes/AllRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="App">
      <AllRoutes />
      <ToastContainer />
    </div>
  );
};

export default App;
