import Main from "./components/Main";
import Nav from "./components/Nav";
import Insert from "./components/Insert";
import Detail from "./components/Detail";
import Update from "./components/Update";

import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/insert" element={<Insert />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
