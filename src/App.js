import React, { useState } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation
} from "react-router-dom";

import Splash from "./Splash";
import Profile from "./Profile";
import About from "./About";
import Login from "./Login";
import Movie from "./Movies";
import Kids from "./Kids";
import Watchlist from "./Watchlist";
import Language from "./Language";
import Show from "./Show";
import Games from"./Games";
import Subscribe from "./Subscribe";
import Watchmovie from"./Watchmovie";

import "./App.css";
import "./About.css";
import "./Login.css";
import "./Splash.css";
import "./Profile.css";
import "./Movies.css";
import "./Kids.css";
import "./Watchlist.css";
import "./Language.css";
import"./Games.css";
import "./Subscribe.css";


function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}


function AppContent() {

  const location = useLocation();

  // Search box open / close
  const [searchOpen, setSearchOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);

const notifications = [
  {
    image: "/img/a1.jpeg",
    message: "Leo is now available"
  },
  {
    image: "/img/a9.jpeg",
    message: "Vikram is now available"
  },
  {
    image: "/img/ppt.jpg",
    message: "GOAT is now available"
  }
];


  return (
    <>
      {location.pathname !== "/" &&
        location.pathname !== "/Login" &&
        location.pathname !== "/Profile" && (

          <div id="p">

            <h1 id="NET">Netflix</h1>

            <ul>

              <li>
                <Link to="/about">Home</Link>
              </li>


              <li>
                <Link to="/Movies">Movies</Link>
              </li>


              <li>
                <Link to="/Show">Shows</Link>
              </li>


              <li>
                <Link to="/watchlist">Watchlist</Link>
              </li>
              <li>
                <Link to="/Language">Browse by language</Link>
              </li>
              <li>
                <Link to="/games">Games</Link>
              </li>


              {/* SEARCH */}
              <li>
                  
                <i className="fa-solid fa-magnifying-glass" 
                  onClick={() => setSearchOpen(!searchOpen)}></i>

                {searchOpen && (
                  <input className="search" type="search"placeholder="Movies and shows"/>
                )}

              </li>


              <li className="notification-container">

  <i
    className="fa-solid fa-bell"
    onClick={() => setNotificationOpen(!notificationOpen)}
  ></i>

  {notifications.length > 0 && (
    <span className="notification-count">
      {notifications.length}
    </span>
  )}

  {notificationOpen && (
    <div className="notification-popup">

      <h3>Notifications</h3>

      {notifications.map((notification, index) => (
        <div
          className="notification-item"
          key={index}
        >

          <img
            src={notification.image}
            alt={notification.message}
          />

          <p>{notification.message}</p>

        </div>
      ))}

    </div>
  )}

</li>


              <li>
                <Link to="/Login">
                  login
                </Link>
              </li>
               <li>
                <Link to="/Kids">
                <img id="sr" src="/img/kids.webp"
                    alt="Profile"
                  />
                </Link>
              </li>


              <li>
                <Link to="/Profile">

                  <img
                    id="src"
                    src="/img/profile2.jpg"
                    alt="Profile"
                  />

                </Link>
              </li>

            </ul>

          </div>
        )}


      <Routes>

        <Route
          path="/"
          element={<Splash />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/Login"
          element={<Login />}
        />

        <Route
          path="/Kids"
          element={<Kids />}
        />

        <Route
          path="/movies"
          element={<Movie />}
        />
        <Route
          path="/show"
          element={<Show />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />

        <Route
          path="/watchlist"
          element={<Watchlist />}
        />
        <Route path="/language"
        element={<Language/>}/>
        <Route path="/games"
        element={<Games/>}/>
        <Route path="/Subscribe"
        element={<Subscribe />}/>
         <Route path="/Watchmovie"
        element={<Watchmovie />}/>

      </Routes>

    </>
  );
}


export default App;
