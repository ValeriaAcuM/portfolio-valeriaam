import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Intro } from "./components/introduction/Info";
import { Skills } from "./components/skills/Skills";
import { Portfolio } from "./components/portfolio/Portfolio";
import { Footer } from "./components/footer/Footer";
import { Contact } from "./components/contact/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" />
      </Routes>
      <Intro />
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
