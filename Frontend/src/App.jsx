import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Topbar from "./Topbar";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Footer from "./Footer"

function App() {
  const [search, setSearch] = useState("");
  const [total, setTotal] = useState(0);

  return (
    <>
      <Topbar />
      <Navbar search={search} setSearch={setSearch} total={total} />
      <Routes>
        <Route path="/" element={<Home search={search} setTotal={setTotal} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;