import React, {useState} from "react";

import Header from "./Components/Header";
import Container from "./Components/Container";
import GlobalStyle from "./GlobalStyle";
import {ThemeProvider} from "styled-components"
import { temaClaro, temaOscuro} from "./UI/temas"
import { BtnTema } from "./UI";
import SwitcherTema from "./Components/SwitcherTema";



function App() {
  const temaGuardado = localStorage.getItem("tema");
  const [tema, setTema] = useState(temaGuardado === "claro" ? true : false);

  const toggleTema = () => {
    setTema((tema) => !tema);
    localStorage.setItem("tema", !tema ? "claro" : "oscuro");
  }
  return (
    <ThemeProvider theme={ tema ? temaClaro : temaOscuro }>
      <GlobalStyle/>
      <BtnTema onClick={toggleTema}>
        <SwitcherTema tema={tema} />
      </BtnTema>
      <Header />
      <Container />
    </ThemeProvider>
  );
}

export default App;
