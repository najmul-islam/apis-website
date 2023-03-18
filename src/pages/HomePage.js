import React from "react";
import { Container } from "react-bootstrap";
import EntriesList from "../components/entries/EntriesList";

const HomePage = () => {
  return (
    <Container className="my-5">
      <EntriesList />
    </Container>
  );
};

export default HomePage;
