import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/home";
import Menu2 from "./pages/Menu2/menu2";
import Menu3 from "./pages/menu3/menu3";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/menu2" element={<Menu2 />} />
        <Route path="/menu3" element={<Menu3 />} />
      </Route>
    </Routes>
  );
}

export default App;
