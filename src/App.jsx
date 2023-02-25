import React from "react";
import AnimatedRoutes from "./components/AnimatedRoutes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
