import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavbarMenu } from "./components/navbar/Navbar";
import { Header } from "./components/header/Header";
import { Portfolio } from "./components/portfolio/Portfolio";
import { Resume } from "./components/resume/Resume";
import { Footer } from "./components/footer/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <NavbarMenu />
      <Routes>
        <Route path="/" />
      </Routes>
      <Header />
      <Portfolio />
      <Resume />
      <Footer />
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
