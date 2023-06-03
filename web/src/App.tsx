import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { IUser, IUserResponse } from "../types";

function App() {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    fetch("http://localhost:5000/auth/login/success", {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": "true",
      },
    })
      .then((res) => {
        if (res.status === 200) return res.json();
        throw new Error("Authentication Failed");
      })
      .then((resObj: IUserResponse) => {
        if (resObj && resObj.user) {
          return setUser(resObj.user);
        } else {
          throw new Error("Authentication Failed");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <BrowserRouter>
      <Navbar user={user} />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={user ? <Navigate to="/" /> : <Login />} path="/login" />
        <Route element={user ? <Post /> : <Login />} path="/post/:id" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
