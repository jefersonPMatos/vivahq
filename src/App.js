import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Registrations } from "./pages/Registrations";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";

import { Theme } from "./styles/theme";
import { Reset } from "./styles/reset";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/inscricoes" element={<Registrations />} />
        </Routes>
      </Router>
      <Navbar />
      <Footer />

      <Reset />
      <Theme />
    </>
  );
}

export default App;
