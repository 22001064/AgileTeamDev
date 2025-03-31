import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import Dashboard from '../components/dashboard';
import Ribbon from '../components/ribbon';
export default function ToDO() {
    return (
        <Dashboard>
          <Ribbon />
      <Row>
        <Col>
          <h3>TO DO</h3>

          {/* Example tasks with border using React-Bootstrap Cards */}
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Task 1</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Task 2</Card.Title>
              <Card.Text>
                Phasellus cursus lorem at nisi vulputate, et consequat justo
                pulvinar.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <h3>In Progress</h3>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Task A</Card.Title>
              <Card.Text>
                Curabitur ac pretium justo, at pellentesque enim.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <h3>Review</h3>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Task X</Card.Title>
              <Card.Text>
                Duis blandit lorem vitae odio congue, nec pellentesque urna
                lacinia.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <h3>Done Tasks</h3>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Task Z</Card.Title>
              <Card.Text>
                Integer non enim vitae neque semper accumsan.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
        </Dashboard>
      );
}


