import React, { useEffect, useState } from 'react';
import { Container, Row, Form, Col, Card } from 'react-bootstrap';
import Sidebar from '../components/dashboard';
import {
  PieChart, Pie, Tooltip, Legend, Cell,
  BarChart, Bar, XAxis, YAxis, CartesianGrid
} from 'recharts';

// Colour constants for charts
const COLORS = ['#999', '#2196f3', '#4caf50'];

const Overview = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedSection, setSelectedSection] = useState('');

  // Fetch tasks from backend
  useEffect(() => {
    fetch('http://localhost:8000/tasks/')
      .then(res => res.json())
      .then(data => setTasks(data));
  }, []);

  const getCount = (key, value) => tasks.filter(t => t[key] === value).length;

  // Pie chart data for status overview
  const pieData = [
    { name: 'To Do', value: getCount('status', 'To Do') },
    { name: 'In Progress', value: getCount('status', 'In Progress') },
    { name: 'Complete', value: getCount('status', 'Complete') },
  ];

  // Bar chart data for priority breakdown
  const barData = [
    { name: 'High', value: getCount('priority', 'High') },
    { name: 'Medium', value: getCount('priority', 'Medium') },
    { name: 'Low', value: getCount('priority', 'Low') },
  ];

  // Types of work dynamically derived from backend
  const typesData = [...new Set(tasks.map(t => t.type))].map(type => ({
    name: type,
    count: tasks.filter(t => t.type === type).length
  }));

  // Conditional zoom effect
  const sectionStyle = (name) => ({
    border: name === selectedSection ? '3px solid #007bff' : '',
    boxShadow: name === selectedSection ? '0 0 20px rgba(0,123,255,0.6)' : '',
    backgroundColor: name === selectedSection ? 'rgba(0,123,255,0.05)' : '',
    zIndex: name === selectedSection ? 1 : 0,
    transition: 'all 0.4s ease',
  });

  const showAll = selectedSection === '';

  return (
    <Sidebar>
      <Container fluid className="p-4">
        {/* Dropdown filter */}
        <Row className="mb-4">
          <Col md={4}>
            <Form.Select
              aria-label="Select section"
              value={selectedSection}
              onChange={(e) => setSelectedSection(e.target.value)}
            >
              <option value="">Show All Sections</option>
              <option value="Overview">Overview</option>
              <option value="Recent Activity">Recent Activity</option>
              <option value="Priority Breakdown">Priority Breakdown</option>
              <option value="Types of Work">Types of Work</option>
            </Form.Select>
          </Col>
        </Row>

        {/* Overview & Recent Activity */}
        <Row className="mb-4">
          {(showAll || selectedSection === 'Overview') && (
            <Col md={showAll ? 6 : 12}>
              <Card className="h-100 mb-4" style={sectionStyle('Overview')}>
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
          )}

          {(showAll || selectedSection === 'Recent Activity') && (
            <Col md={showAll ? 6 : 12}>
              <Card className="h-100 mb-4" style={sectionStyle('Recent Activity')}>
                <Card.Header>Recent Activity</Card.Header>
                <Card.Body>
                  <ul>
                    {tasks
                      .sort((a, b) => new Date(b.due_date || b.id) - new Date(a.due_date || a.id))
                      .slice(0, 5)
                      .map(task => (
                        <li key={task.id}>
                          <strong>{task.task}</strong> – {task.assignee} – {task.status}
                        </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          )}
        </Row>

        {/* Priority Breakdown & Types of Work */}
        <Row>
          {(showAll || selectedSection === 'Priority Breakdown') && (
            <Col md={showAll ? 6 : 12}>
              <Card className="h-100 mb-4" style={sectionStyle('Priority Breakdown')}>
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
          )}

          {(showAll || selectedSection === 'Types of Work') && (
            <Col md={showAll ? 6 : 12}>
              <Card className="h-100 mb-4" style={sectionStyle('Types of Work')}>
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
                      {typesData.map(row => (
                        <tr key={row.name}>
                          <td>{row.name}</td>
                          <td>{row.count}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </Card.Body>
              </Card>
            </Col>
          )}
        </Row>
      </Container>
    </Sidebar>
  );
};

export default Overview;
