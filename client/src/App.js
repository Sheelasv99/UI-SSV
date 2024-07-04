import React, { useState } from 'react'; // Import useState from react
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Bookings from "./components/pages/Bookings";
import About from "./components/pages/About";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Profile from "./components/pages/Profile";
import Navbar from "./components/pages/Navbar";

const bookings = [
  {
      id:4567,
      roomtype:"KING ROOM"
  },
  {
     id: 87654,
     roomtype:"Two queen suite"
  },
  {
      id:23456,
      roomtype:"KING Room suite"
  },
];

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Use useState here for authentication state

  return (
    <div className="App">
      <h1>SS Resort</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} >
            <Route index element={<About />} />
            <Route path="/register" element={<Register setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="/bookings" element={<Bookings bookings={bookings} />} />
            <Route
              path="/profile"
              element={isAuthenticated ? <Profile /> : <Navigate to="/login" />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;