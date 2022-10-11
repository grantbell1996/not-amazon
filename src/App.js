import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="application"></div>
      <BrowserRouter>
        <Routes>

          <Route path="" element={<Header />}></Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
