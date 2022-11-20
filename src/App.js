import React, {useEffect, useState} from "react";

import { Homepage } from "./components/pages/homepage";
import Login from "./components/pages/login";
import Register from "./components/pages/register";
import Dashboard from "./components/pages/dashboard";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/home" element={<Homepage />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
