import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Component/Header/Header";

import Container from "@mui/material/Container";

function App() {
  const [meanings, setMeanings] = useState([]);
  const dictionaryApiData = async () => {
    try {
      const data = await axios.get(
        "https://api.dictionaryapi.dev/api/v2/entries/en/hello"
      );
      setMeanings(data);
    } catch {}
  };
  useEffect(() => {
    dictionaryApiData();
  }, []);
  return (
    <div style={{ background: "Orange", color: "#fff", height: "100vh" }}>
      <Container
        maxWidth="md"
        style={{ display:'flex',flexDirection:'column',height:'100vh' }}
      >
        <Header/>
      </Container>
    </div>
  );
}

export default App;
