
import { BrowserRouter as Router, Routes, Route, } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Nav from "./components/Nav";
import NotFound from "./pages/NotFound";


function App() {

  return (
    <div className="relative">

       
      <Router>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path = "/login" element = {<Login />} />
          <Route path = "*" element = {<NotFound />} />
        </Routes>
      </Router>

      
    </div>
  )
}

export default App
