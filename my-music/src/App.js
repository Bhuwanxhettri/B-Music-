import React from "react";
import Asidebar from "./Components/AsideBar/Asidebar";
import FovriouteMusic from "./Components/Page/FovriouteMusic";
import MusicHome from "./Components/Page/MusicHome/MusicHome";
import {Routes, Route } from "react-router-dom";
import MusicInsta from "./Components/Page/MusicInsta/MusicInsta";
import Auth from "./Components/Page/SignUp/Auth";
import AddMusic from "./Components/Page/AddMusic";
import Add from "./Components/Page/MusicInsta/Add";

const App = () => {
  return (
    <>
      <div className="flex">
        <div>
           <Asidebar />
        </div>
        <div className="w-full">
            <Routes>
              <Route path="/" element={<MusicHome />} />
              <Route path="instaMusic" element={ <MusicInsta/>} />
              <Route path="addMusicInsta" element={ <Add/>} />
              <Route path="addMusic" element={ <AddMusic/>} />
              <Route path="favMusic" element={<FovriouteMusic />} />
              <Route path="signUp" element={<Auth />} />
            </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
