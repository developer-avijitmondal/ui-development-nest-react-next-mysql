import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import './App.css'
// import Counter from './components/Counter'
// import Header from './components/Header'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
      <Link to="/" className="navbar-brand">MyApp</Link>

      <div className="ms-auto d-flex gap-2">
        <Link to="/" className="btn btn-outline-secondary btn-sm">Home</Link>
        <Link to="/login" className="btn btn-outline-primary btn-sm">Login</Link>
        <Link to="/register" className="btn btn-outline-success btn-sm">Register</Link>
      </div>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;


