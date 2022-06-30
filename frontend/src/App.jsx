/* eslint-disable import/no-unresolved */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MyProjects from "./components/MyProjects";
import MySearch from "./components/MySearch";
import Form from "./pages/Form";
import DailyNews from "./components/DailyNews";
import Home from "./pages/Home";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/MyProjects" element={<MyProjects />} />
        <Route path="/MySearch" element={<MySearch />} />
        <Route path="/Form" element={<Form />} />
        <Route path="/DailyNews" element={<DailyNews />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
