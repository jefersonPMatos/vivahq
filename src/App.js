import * as S from "./styles/app";

import { Home } from "./pages/Home";

import { Theme } from "./styles/theme";
import { Reset } from "./styles/reset";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <S.Container>
      <Navbar />
      <Home />
      <Footer />

      <Reset />
      <Theme />
    </S.Container>
  );
}

export default App;
