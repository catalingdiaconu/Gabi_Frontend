import { Homepage } from "./components/pages/homepage";
import Auth from "./components/pages/auth";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/home" element={<Homepage />}/>
        <Route path="/auth" element={<Auth />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
