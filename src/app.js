import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

// pages
import Home from "./pages/Home"
import Create from "./pages/Create"
import Update from "./pages/Update"
import Login from "./pages/Login" // Assuming you have a Login component

function App() {
  return (
    <BrowserRouter>
      <nav className="nav">
        <h1>Rent Now</h1>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/create">Create New Smoothie</Link>
          <Link to="/login" className="login-button">Login</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/:id" element={<Update />} />
        <Route path="/login" element={<Login />} /> {/* Assuming you have a Login component */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;