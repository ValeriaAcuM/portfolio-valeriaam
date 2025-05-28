import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavbarMenu } from "./components/navbar/Navbar";
import { Header } from "./components/header/Header";
import { Skills } from "./components/skills/Skills";
import { Portfolio } from "./components/portfolio/Portfolio";
import { Footer } from "./components/footer/Footer";
import { Contact } from "./components/contact/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <NavbarMenu />
      <Routes>
        <Route path="/" />
      </Routes>
      <Header />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
