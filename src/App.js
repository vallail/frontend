import React from "react";
import Navbar from "./components/Navbar";
import { Container } from "react-bootstrap";
import Foot from "./components/Foot";
import HomeScreen from "./screens/HomeScreen";
const App = () => {
  return (
    <>
      <Navbar />
      <main className="py-3">
        <Container>
          <HomeScreen />
        </Container>
      </main>
      <Foot />
    </>
  );
};

export default App;
