import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Create from "./prac_com/Creact";
import Read from "./prac_com/Read";
import Update from "./prac_com/Updatefile";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Create/>}></Route>
          <Route path="/read" element={<Read/>}></Route>
          <Route path="/update" element={<Update/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;