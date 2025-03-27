import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, InputGroup, FormControl } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
const Sidebar = ({children}) => {
 // Sidebar items and their paths
 const sidebarItems = [
    { name: "Summary", path: "/nestcafe/pages/ToDO" },
    { name: "Backlog", path: "/" },
    { name: "Timeline", path: "/" },
    { name: "Board", path: "/board" },
    { name: "Reports", path: "/reports" },
    { name: "Forms", path: "/forms" },
    { name: "Goals", path: "/goals" },
  ];

  return (
    <Container fluid className="vh-100 d-flex flex-column">
      {/* Header */}
      <Row className="bg-light p-3 align-items-center">
        <Col md={3} className="fw-bold">PROJECT NAME</Col>
        <Col md={6}>
          <InputGroup>
            <FormControl placeholder="SEARCH BAR" />
          </InputGroup>
        </Col>
        <Col md={3} className="d-flex justify-content-end align-items-center">
          <Button variant="primary" className="me-3">ADD A TASK</Button>
          <div className="me-3 position-relative">
            <i className="bi bi-gear-fill fs-4"></i>
            <span className="position-absolute top-0 start-100 translate-middle badge bg-danger">
              1
            </span>
          </div>
          <div className="text-center">
          <img
                  src="https://avatars.githubusercontent.com/u/81866624?v=4"
                  alt="User avatar"
                  className="rounded-circle"
                  width="40"
                />
                <div>USERNAME</div>
                <Link to="/" className="btn btn-light w-100 my-1 text-start">Logout</Link>
            </div>
        </Col>
      </Row>

      {/* Sidebar + Main Content */}
      <Row className="flex-grow-1">
        {/* Sidebar */}
        <Col md={2} className="bg-light d-flex flex-column p-3">
          {sidebarItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `btn w-100 text-start mb-3 ${isActive ? "btn-primary" : "btn-outline-secondary"}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </Col>

        {/* Main Content Area */}
        <Col md={10} className="bg-white p-4">
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default Sidebar;
