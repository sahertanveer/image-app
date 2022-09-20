import React, { useState } from "react";
import SideDrawer from "../components/SideDrawer";
import Navbar from "../components/Navbar";
import Main from "./Main";
import { Row, Col } from "react-bootstrap";

const Index = () => {
  const [image, setImage] = useState("default");

  return (
    <div className="container-fluid bg-light p-0">
      <Row className="g-0">
        <Col xs={12} md={3}>
          <SideDrawer image={image} setImage={setImage} />
        </Col>
        <Col xs={12} md={9}>
          <Navbar />
          <Main image={image} />
        </Col>
      </Row>
    </div>
  );
};

export default Index;
