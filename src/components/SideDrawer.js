import React from "react";
import { Nav, Form } from "react-bootstrap";

const SideDrawer = ({ image, setImage }) => {
  const changeImage = (value) => {
    setImage(value);
  };

  const items = [
    {
      label: "Simple Bubbles",
      key: "simple",
    },
    {
      label: "Colorful Bubbles",
      key: "colorful",
    },
    {
      label: "White Bubbles",
      key: "white",
    },
    {
      label: "Default",
      key: "default",
    },
  ];
  return (
    <Nav
      className="col-md-12 d-none d-md-block bg-custom sidebar justify-content-center"
      style={{ height: "100vh" }}
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <div className="sidebar-sticky"></div>
      <Nav.Item className="custom-nav-header px-5 py-3">Dust Analysis</Nav.Item>
      <hr />
      <Nav.Item className="custom-nav-item p-3">
        <Form>
          {items &&
            items.map((item, index) => (
              <Form.Group
                className="mb-3 d-flex justify-content-between"
                key={index}
              >
                <Form.Label>{item.label}</Form.Label>
                <Form.Check
                  type="Radio"
                  label=""
                  value={item.key}
                  name={item.key}
                  checked={image === item.key}
                  onChange={(e) => changeImage(e.target.value)}
                />
              </Form.Group>
            ))}
        </Form>
      </Nav.Item>
    </Nav>
  );
};

export default SideDrawer;
