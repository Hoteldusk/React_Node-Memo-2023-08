import Main from "./components/Main";
import Nav from "./components/Nav";
import Insert from "./components/Insert";
import Detail from "./components/Detail.jsx";

import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/insert" element={<Insert />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
