
import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";


function App() {
  return (
    <>
      <div className="application"> 
      <BrowserRouter>
      <Header />
        <Routes>

          <Route path="" element={<Home />}></Route>

        </Routes>
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;
