import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const user = true;
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
