import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Component/Header/Header";

import Container from "@mui/material/Container";
import Definitions from "./Component/Definition/Definitions";
// or
// import { Container } from '@mui/material';
function App() {
  const [meanings, setMeanings] = useState([]);
  const [input, setInput] = useState("");

  const dictionaryApiData = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`
      );
      setMeanings(data.data);
    } catch {}
  };
  console.log(meanings);

  useEffect(() => {
    dictionaryApiData();
  }, [input]);
  return (
    <div style={{ background: "#067597", color: "#fff", height: "100vh" }}>
      <Container
        maxWidth="md"
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
        <Header input={input} setInput={setInput} />
        <Definitions meanings={meanings} word={input} />
      </Container>
    </div>
  );
}

export default App;
