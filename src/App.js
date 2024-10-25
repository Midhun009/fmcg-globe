import React from "react";
import { BrowserRouter as Router } from "react-router-dom"; // Import Router
import "./App.css";
import "./assets/css/styles.css";
import Navbar from "./components/Navbar/Navbar";
import LoginModal from "./components/Navbar/LoginModal";
import Footer from "./components/Footer/Footer";
import Routes from "./routes"; // Ensure this is exporting your routes
import ScrollToTopButton from "./components/Button/ScrollToTopButton";

function App() {
  return (
    <Router>
      {" "}
      {/* Wrap your application in Router */}
      <div className="App">
        <Navbar />
        <LoginModal />
        <ScrollToTopButton />
        <Routes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
