import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Sidebar from '../components/dashboard';
import {
  PieChart, Pie, Tooltip, Legend, Cell,
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
} from 'recharts';

// Dummy data for the Pie chart (Overview)
const pieData = [
  { name: 'Completed', value: 12 },
  { name: 'In Progress', value: 19 },
  { name: 'To Do', value: 7 },
];

const COLORS = ['#36A2EB', '#FFCE56', '#FF6384'];

// Dummy data for the Bar chart (Priority Breakdown)
const barData = [
  { name: 'High', value: 5 },
  { name: 'Medium', value: 10 },
  { name: 'Low', value: 3 },
];

const Overview = () => {
  return (
    <Sidebar>
      <Container fluid className="p-4">
        {/* Row for Overview & Recent Activity */}
        <Row className="mb-4">
          <Col md={6}>
            <Card className="h-100">
              <Card.Header>Overview</Card.Header>
              <Card.Body className="d-flex justify-content-center align-items-center" style={{ height: '300px' }}>
                <PieChart width={300} height={300}>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="h-100">
              <Card.Header>Recent Activity</Card.Header>
              <Card.Body>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id urna egestas, viverra lectus in, volutpat ipsum.
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
          <Col md={6}>
            <Card className="h-100">
              <Card.Header>Priority Breakdown</Card.Header>
              <Card.Body className="d-flex justify-content-center align-items-center" style={{ height: '300px' }}>
                <BarChart width={300} height={300} data={barData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" fill="#82ca9d" />
                </BarChart>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="h-100">
              <Card.Header>Types of Work</Card.Header>
              <Card.Body>
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
    </Sidebar>
  );
};

export default Overview;
