import { Outlet, Route, Routes } from "react-router-dom";
import "../App.css";
import Home from "./Home";
import Detail from "./Detail";
import Header from "./Header";
import Footer from "./Footer";
import Propos from "./Propos";

function App() {

  return (
    <>
      <Header />
      <div className="bg-black" style={{minHeight: '570px'}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apropos" element={<Propos />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
