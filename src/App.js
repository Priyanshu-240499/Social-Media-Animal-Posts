import Nav from "./Navbar/nav";
import Home from "./Home/home";
import User from "./user/user";
import Comment from "./comment/comments";
import "./styles.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./search/search";
import Switch from "@mui/material/Switch";
import DarkMode from "./themeContext";
const label = { inputProps: { "aria-label": "Switch demo" } };

export default function App() {
  //................................
  const [isdark, setisdark] = useState(false);
  return (
    <DarkMode.Provider value={isdark}>
      <div
        className="main"
        style={{
          backgroundColor: isdark ? "black" : "white",
          color: isdark ? "white" : "black"
        }}
      >
        <BrowserRouter>
          <nav
            className="navbar"
            style={{ backgroundColor: isdark ? "rgb(39, 37, 37)" : "navy" }}
          >
            <Nav />
            <Switch {...label} onChange={() => setisdark(!isdark)} />
            <span style={{ color: "white" }}>{isdark ? "Dark" : "Light"}</span>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user/:id" element={<User />} />
            <Route path="/search/:tag" element={<Search />} />
            <Route path="/comment/:id" element={<Comment />} />
          </Routes>
        </BrowserRouter>
      </div>
    </DarkMode.Provider>
  );
}
