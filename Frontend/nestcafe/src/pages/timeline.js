import React, { useEffect, useState } from 'react';
import { Container, Table, Modal, Form, Button, Col, Row } from 'react-bootstrap';
import Dashboard from '../components/dashboard';

// Define the timeline range (e.g. the sprint duration or active month)
const startDate = new Date('2025-03-27');
const endDate = new Date('2025-04-15');

// Generate an array of dates (one per day) from startDate to endDate inclusive
function generateDateRange(start, end) {
  const dateArray = [];
  let currentDate = new Date(start);
  while (currentDate <= end) {
    dateArray.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return dateArray;
}

const dateRange = generateDateRange(startDate, endDate);

// Helper to check if a given date is within an event’s start/end range
function isWithinRange(date, start, end) {
  return date >= start && date <= end;
}

// Helper to parse a date string (YYYY-MM-DD) into a JS Date
function parseDate(str) {
  return new Date(str + 'T00:00:00'); // ensures no timezone offset
}

// Color logic for statuses
function getStatusColor(status) {
  switch (status) {
    case 'Complete': return '#4caf50';
    case 'In Progress': return '#2196f3';
    case 'To Do': return '#999';
    default: return '#999'; // fallback grey
  }
}

export default function TimelinePage() {
  // Store fetched timeline tasks
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newTask, setNewTask] = useState({ name: '', start: '', end: '', due_date: '', assignee: '', type: 'Task' });
  const [assignees, setAssignees] = useState([]);
  const [newAssignee, setNewAssignee] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch all timeline tasks with a defined start & end from the backend
  useEffect(() => {
    fetch('http://localhost:8000/tasks/')
      .then(res => res.json())
      .then(data => {
        const sorted = data
          .filter(task => task.start && task.end)
          .sort((a, b) => a.id - b.id)
          .map((t, index) => ({
            id: index + 1,
            originalId: t.id,
            name: t.task,
            start: t.start,
            end: t.end,
            due_date: t.due_date,
            status: t.status,
            assignee: t.assignee || 'Unassigned'
          }));
        setTasks(sorted);

        // Populate unique assignees
        const uniqueAssignees = [...new Set(sorted.map(t => t.assignee))];
        setAssignees(uniqueAssignees);
      });
  }, []);

  // Open and close the modal
  const openModal = () => setShowModal(true);
  const closeModal = () => {
    setShowModal(false);
    setNewTask({ name: '', start: '', end: '', due_date: '', assignee: '' });
    setNewAssignee('');
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTask(prev => ({ ...prev, [name]: value }));
  };

  // Handle new assignee field
  const handleNewAssigneeChange = (e) => setNewAssignee(e.target.value);

  const addAssignee = () => {
    if (newAssignee && !assignees.includes(newAssignee)) {
      setAssignees([...assignees, newAssignee]);
      setNewAssignee('');
    }
  };

  // Add new task to backend
  const addTask = () => {
    const timelineEvent = {
      task: newTask.name,
      status: 'To Do',
      start: newTask.start,
      end: newTask.end,
      due_date: newTask.due_date || newTask.end,
      assignee: newTask.assignee || 'Unassigned',
      priority: newTask.priority || 'Medium',
      type: newTask.type || 'Task',
    };

    fetch('http://localhost:8000/tasks/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(timelineEvent),
    })
      .then(res => res.json())
      .then(() => window.location.reload());
  };

  // Update a task’s status and persist it
  const handleStatusChange = (id, newStatus) => {
    const updated = tasks.find(task => task.id === id);
    if (!updated) return;

    fetch(`http://localhost:8000/tasks/${updated.originalId}/`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        task: updated.name,
        status: newStatus,
        start: updated.start,
        end: updated.end,
        due_date: updated.due_date,
        assignee: updated.assignee,
        priority: updated.priority,
        type: updated.type,
      }),
    })
      .then(res => res.json())
      .then(() => {
        setTasks(tasks.map(task => task.id === id ? { ...task, status: newStatus } : task));
      });
  };

  return (
    <Dashboard>
      <Container fluid className="p-4">
        <h2 className="mb-4">Timeline Page</h2>

        {/* Search and Add Event Controls */}
        <Row className="align-items-center mb-3">
          <Col md={6}>
            <Form.Control
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Col>
          <Col md="auto">
            <Button variant="primary" onClick={openModal}>Add Timeline Event</Button>
          </Col>
        </Row>

        {/* Task Timeline Table */}
        <Table bordered hover responsive>
          <thead className="table-light">
            <tr>
              <th style={{ minWidth: '250px' }}>Sprint / Task</th>
              <th style={{ minWidth: '100px' }}>Status</th>
              <th style={{ minWidth: '150px' }}>Assignee</th>
              {dateRange.map((date) => (
                <th key={date.toISOString()} className="text-center">
                  {date.getDate()}/{date.getMonth() + 1}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {tasks.filter(task =>
              task.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              task.assignee.toLowerCase().includes(searchTerm.toLowerCase())
            ).map((task) => {
              const start = parseDate(task.start);
              const end = parseDate(task.end);
              const bgColor = getStatusColor(task.status);
              return (
                <tr key={task.originalId}>
                  <td>{task.name}</td>
                  <td>
                    <Form.Select
                      value={task.status}
                      onChange={(e) => handleStatusChange(task.id, e.target.value)}
                      style={{ backgroundColor: bgColor, color: '#fff' }}
                    >
                      <option value="To Do">To Do</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Complete">Complete</option>
                    </Form.Select>
                  </td>
                  <td className="d-flex align-items-center gap-2">
                    <img
                      src={`https://ui-avatars.com/api/?name=${encodeURIComponent(task.assignee)}&background=0D8ABC&color=fff&rounded=true&size=32`}
                      alt={task.assignee}
                      style={{ width: '32px', height: '32px', borderRadius: '50%' }}
                    />
                    <span>{task.assignee}</span>
                  </td>
                  {dateRange.map((date) => {
                    const inRange = isWithinRange(date, start, end);
                    return (
                      <td
                        key={date.toISOString()}
                        style={{ backgroundColor: inRange ? bgColor : 'transparent', opacity: inRange ? 0.6 : 1 }}
                      />
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>

      {/* Modal for Adding Timeline Task */}
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Timeline Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formEventName" className="mb-3">
              <Form.Label>Event Name</Form.Label>
              <Form.Control type="text" placeholder="Enter event name" name="name" value={newTask.name} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formStartDate" className="mb-3">
              <Form.Label>Start Date</Form.Label>
              <Form.Control type="date" name="start" value={newTask.start} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formEndDate" className="mb-3">
              <Form.Label>End Date</Form.Label>
              <Form.Control type="date" name="end" value={newTask.end} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formDueDate" className="mb-3">
              <Form.Label>Due Date</Form.Label>
              <Form.Control type="date" name="due_date" value={newTask.due_date} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formType" className="mb-3">
              <Form.Label>Type</Form.Label>
              <Form.Select name="type" value={newTask.type} onChange={handleChange}>
                <option value="Task">Task</option>
                <option value="Bug">Bug</option>
                <option value="Feature">Feature</option>
              </Form.Select>
            </Form.Group>
            <Form.Group controlId="formAssignee" className="mb-3">
              <Form.Label>Assignee</Form.Label>
              <Form.Select name="assignee" value={newTask.assignee} onChange={handleChange}>
                <option value="">Select Assignee</option>
                {assignees.map(a => <option key={a} value={a}>{a}</option>)}
              </Form.Select>
            </Form.Group>
            <Form.Group controlId="formNewAssignee" className="mb-3">
              <Form.Label>Or Add New Assignee</Form.Label>
              <Form.Control type="text" placeholder="Enter new assignee" value={newAssignee} onChange={handleNewAssigneeChange} />
              <Button variant="secondary" size="sm" onClick={addAssignee} className="mt-2" disabled={!newAssignee.trim()}>Add Assignee</Button>
            </Form.Group>
            <p className="text-muted">New events are marked as "To Do" and saved with due date.</p>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>Cancel</Button>
          <Button variant="primary" onClick={addTask}>Add Event</Button>
        </Modal.Footer>
      </Modal>
    </Dashboard>
  );
}
