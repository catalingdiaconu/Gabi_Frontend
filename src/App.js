import { Homepage } from "./components/pages/homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/home" element={<Homepage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
