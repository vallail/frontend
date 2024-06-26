import React from "react";
import Navbar from "./components/Navbar";
import Foot from "./components/Foot";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
const App = () => {
  return (
    <>
      <Navbar />
      <main className="py-3">
        <Container>
          <Outlet />
        </Container>
      </main>
      <Foot />
    </>
  );
};

export default App;
