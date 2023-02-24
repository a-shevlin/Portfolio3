import React from "react";
import AnimatedRoutes from "./components/AnimatedRoutes";
import { BrowserRouter } from "react-router-dom";
import Nav from "./components/Nav";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Nav />
        <AnimatedRoutes />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
