import React, { useEffect, useState } from 'react';
import { Row, Col, Card } from "react-bootstrap";
import Dashboard from '../components/dashboard';
import Ribbon from '../components/ribbon';

export default function ToDO() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/tasks/')
      .then(res => res.json())
      .then(data => setTasks(data));
  }, []);

  const filterByStatus = (status) => tasks.filter(task => task.status === status);

  return (
    <Dashboard>
      <Ribbon />
      <Row id="todoRow">
        {['To Do', 'In Progress', 'Complete'].map((status, idx) => (
          <Col key={idx}>
            <h3>{status}</h3>
            {filterByStatus(status).map(task => (
              <Card className="mb-3" key={task.id}>
                <Card.Body>
                  <Card.Title>{task.task}</Card.Title>
                  <Card.Text>Assignee: {task.assignee} | Priority: {task.priority}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </Col>
        ))}
      </Row>
    </Dashboard>
  );
}


