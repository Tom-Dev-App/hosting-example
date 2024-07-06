import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Form from "./pages/Form";
import Table from "./pages/Table";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/table" element={<Table />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </>
  );
}

export default App;
