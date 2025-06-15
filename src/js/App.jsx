import { createRoot } from "react-dom/client";
import { NavbarMenu } from "./components/navbar/Navbar";
import { Header } from "./components/header/Header";
import { Portfolio } from "./components/portfolio/Portfolio";
import { Resume } from "./components/resume/Resume";
import { Footer } from "./components/footer/Footer";

const App = () => {
  return (
    <div>
      <NavbarMenu />
      <Header />
      <Portfolio />
      <Resume />
      <Footer />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
