import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Message from "./message";
import Product from "./product";
import axios from "axios";
import cors from "cors"

let App: React.FC = () => {
  return (
    <>
      <Message msg="Hello" />
      <Product title="Macbook Pro" price={250000} />
      <Product title="Apple Watch" price={25000} />
      <Product title="iPhone" price={75000} />
    </>
  );
};

export default App;
