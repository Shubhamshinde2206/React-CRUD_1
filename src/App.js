import J1 from "./Component/J1";
import Read from "./Component/Read";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Update from "./Component/Update";


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <>
    <Route path="/" element={ <Read/>}></Route>
    <Route path="/create" element={ <J1/>}></Route>
    <Route path="/update/:id" element={<Update/>}></Route>
    </>
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
