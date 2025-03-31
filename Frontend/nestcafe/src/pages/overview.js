import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Dashboard from '../components/dashboard';
// import your chart library if needed, e.g. import { PieChart, BarChart } from 'some-chart-library';

const Overview = () => {
  return (
    <Dashboard>
    <Container fluid className="p-4">
      {/* Row for Overview & Recent Activity */}
      <Row className="mb-4">
        {/* Left column: Pie chart / Overview */}
        <Col md={6}>
          <Card className="h-100">
            <Card.Header>Overview</Card.Header>
            <Card.Body>
              {/* Replace with your Pie Chart component */}
              <div style={{ height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <p>Pie Chart Placeholder</p>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Right column: Recent Activity */}
        <Col md={6}>
          <Card className="h-100">
            <Card.Header>Recent Activity</Card.Header>
            <Card.Body>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id urna 
                egestas, viverra lectus in, volutpat ipsum. Quisque lacinia massa nec leo 
                semper, in aliquet nisl facilisis.
              </p>
              <ul>
                <li>Activity 1</li>
                <li>Activity 2</li>
                <li>Activity 3</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Row for Priority Breakdown & Types of Work */}
      <Row>
        {/* Left column: Bar chart / Priority Breakdown */}
        <Col md={6}>
          <Card className="h-100">
            <Card.Header>Priority Breakdown</Card.Header>
            <Card.Body>
              {/* Replace with your Bar Chart component */}
              <div style={{ height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <p>Bar Chart Placeholder</p>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Right column: Types of work */}
        <Col md={6}>
          <Card className="h-100">
            <Card.Header>Types of Work</Card.Header>
            <Card.Body>
              {/* Example table */}
              <table className="table">
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Count</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Task</td>
                    <td>10</td>
                  </tr>
                  <tr>
                    <td>Bug</td>
                    <td>5</td>
                  </tr>
                  <tr>
                    <td>Feature</td>
                    <td>2</td>
                  </tr>
                </tbody>
              </table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </Dashboard>
  );
};

export default Overview;
