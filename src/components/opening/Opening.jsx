import React from "react";
import air from "../../assets/img/air.jpeg";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Opening.css";
import { Link } from "react-router-dom";

function Opening() {
  const [clicks, setClicks] = React.useState(0);
  const increment = () => setClicks(prev => prev + 1);

  let message;
  switch (clicks) {
    case 0: {
      message = (
        <div className="intro" onClick={increment}>
          Welcome to the New York Times API Application
          <br />
          <strong>Click to continue</strong>
        </div>
      );
      break;
    }
    case 1: {
      message = (
        <div className="intro" onClick={increment}>
          Checkout NYT for awesome movie reviews, books and the latest news.{" "}
          <br />
          <a href="https://www.nytimes.com">https://www.nytimes.com</a>
          <br />
          <strong>Click to continue</strong>
        </div>
      );
      break;
    }
    default: {
      message = <Link to="/main">Continue</Link>;
      break;
    }
  }

  return (
    <>
      <Container>
        <Row>
          <Col />
          <Col xs={6} md={4}>
            <Image src={air} thumbnail />
            <div>{message}</div>
          </Col>
          <Col />
        </Row>
      </Container>
    </>
  );
}

export default Opening;
