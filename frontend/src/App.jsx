import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Project from "./pages/Project";
import Form from "./pages/Form";
import Home from "./pages/Home";
import ChatPage from "./pages/ChatPage";

import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Form" element={<Form />} />
          <Route path="/chat" element={<ChatPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
