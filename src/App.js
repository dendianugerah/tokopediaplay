import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage";
import DetailPages from "./pages/detail";
import NonExistPage from "./pages/blank";

function App() {
  return (
    <div className="App my-[50px]">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/video/:id" element={<DetailPages />} />
        <Route path="*" element={<NonExistPage />} />
      </Routes>
    </div>
  );
}

export default App;
