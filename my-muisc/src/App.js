import React from "react";
import Asidebar from "./Components/AsideBar/Asidebar";
import FovriouteMusic from "./Components/Page/FovriouteMusic";
import MusicHome from "./Components/Page/MusicHome";
import SignUp from "./Components/Page/SignUp/SignUp";
import {Routes, Route } from "react-router-dom";
import MusicInsta from "./Components/Page/MusicInsta/MusicInsta";

const App = () => {
  return (
    <>
      <div className="flex">
        <div>
          <Asidebar />
        </div>
        <div>
            <Routes>
              <Route path="/" element={<MusicHome />} />
              <Route path="instaMusic" element={ <MusicInsta/>} />
              <Route path="favMusic" element={<FovriouteMusic />} />
              <Route path="signUp" element={<SignUp />} />
            </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
