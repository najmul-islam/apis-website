import React from "react";
import { Alert } from "react-bootstrap";

const Error = ({ message }) => {
  return (
    <Alert variant="danger">
      <Alert.Heading>You got an error!</Alert.Heading>
      <p>{message}</p>
    </Alert>
  );
};

export default Error;
