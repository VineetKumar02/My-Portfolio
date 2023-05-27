import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Tech, Works } from "./components";

import "./index.css";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Tech />
      <Works />
      <Contact />
    </BrowserRouter>
  );
}

export default App;