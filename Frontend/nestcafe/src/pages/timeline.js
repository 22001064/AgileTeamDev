import React, { useEffect, useState } from 'react';
import { Container, Table, Modal, Form, Button } from 'react-bootstrap';
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

// Check if a date falls between a start and end date (inclusive)
function isWithinRange(date, start, end) {
  return date >= start && date <= end;
}

// Parse a YYYY-MM-DD date string into a JavaScript Date object
function parseDate(str) {
  return new Date(str + 'T00:00:00');
}

// Return a background color based on the task status
function getStatusColor(status) {
  switch (status) {
    case 'DONE': return '#4caf50';
    case 'IN PROGRESS': return '#2196f3';
    case 'TO DO': return '#999';
    default: return '#999';
  }
}

export default function TimelinePage() {
  // Store fetched timeline tasks
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newTask, setNewTask] = useState({ name: '', start: '', end: '', due_date: '' });

  // Fetch all timeline tasks with a defined start & end from the backend
  useEffect(() => {
    fetch('http://localhost:8000/tasks/')
      .then(res => res.json())
      .then(data => {
        const sorted = data
          .filter(task => task.start && task.end)
          .sort((a, b) => a.id - b.id)
          .map((t, index) => ({
            id: index + 1, // Reset task ID
            originalId: t.id, // Keep reference to backend ID
            name: t.task,
            start: t.start,
            end: t.end,
            due_date: t.due_date,
            status: t.status.toUpperCase()
          }));
        setTasks(sorted);
      });
  }, []);

  // Open and close the modal
  const openModal = () => setShowModal(true);
  const closeModal = () => {
    setShowModal(false);
    setNewTask({ name: '', start: '', end: '', due_date: '' });
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTask(prev => ({ ...prev, [name]: value }));
  };

  // Add new task to backend (include due_date)
  const addTask = () => {
    const timelineEvent = {
      task: newTask.name,
      status: 'To Do',
      start: newTask.start,
      end: newTask.end,
      due_date: newTask.due_date || newTask.end, // Default due_date to end if empty
      assignee: 'Auto',
      priority: 'Medium'
    };

    fetch('http://localhost:8000/tasks/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(timelineEvent),
    })
      .then(res => res.json())
      .then(() => fetch('http://localhost:8000/tasks/'))
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
            status: t.status.toUpperCase()
          }));
        setTasks(sorted);
        closeModal();
      });
  };

  // Update a task’s status and persist it (retain due_date)
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
        assignee: 'Auto',
        priority: 'Medium'
      }),
    })
      .then(res => res.json())
      .then(() => {
        setTasks(tasks.map(task =>
          task.id === id ? { ...task, status: newStatus } : task
        ));
      });
  };

  return (
    <Dashboard>
      <Container fluid className="p-4">
        <h2 className="mb-4">Timeline Page</h2>

        {/* Add Event Button */}
        <Button variant="primary" onClick={openModal} className="mb-3">
          Add Timeline Event
        </Button>

        {/* Task Timeline Table */}
        <Table bordered hover responsive>
          <thead className="table-light">
            <tr>
              {/* Fixed columns for Sprint name and status */}
              <th style={{ minWidth: '250px' }}>Sprint / Task</th>
              <th style={{ minWidth: '100px' }}>Status</th>

              {/* Timeline days */}
              {dateRange.map((date) => (
                <th key={date.toISOString()} className="text-center">
                  {date.getDate()}/{date.getMonth() + 1}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {tasks.map((task) => {
              const start = parseDate(task.start);
              const end = parseDate(task.end);
              const bgColor = getStatusColor(task.status);

              return (
                <tr key={task.originalId}>
                  {/* Task Name */}
                  <td>{task.name}</td>

                  {/* Status Dropdown */}
                  <td>
                    <Form.Select
                      value={task.status}
                      onChange={(e) => handleStatusChange(task.id, e.target.value)}
                      style={{ backgroundColor: bgColor, color: '#fff' }}
                    >
                      <option value="TO DO">TO DO</option>
                      <option value="IN PROGRESS">IN PROGRESS</option>
                      <option value="DONE">DONE</option>
                    </Form.Select>
                  </td>

                  {/* Timeline grid: colour cells if date is within the event’s range */}
                  {dateRange.map((date) => {
                    const inRange = isWithinRange(date, start, end);
                    return (
                      <td
                        key={date.toISOString()}
                        style={{
                          backgroundColor: inRange ? bgColor : 'transparent',
                          opacity: inRange ? 0.6 : 1,
                          transition: 'background-color 0.3s',
                        }}
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
              <Form.Control
                type="text"
                placeholder="Enter event name"
                name="name"
                value={newTask.name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formStartDate" className="mb-3">
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                type="date"
                name="start"
                value={newTask.start}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formEndDate" className="mb-3">
              <Form.Label>End Date</Form.Label>
              <Form.Control
                type="date"
                name="end"
                value={newTask.end}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formDueDate" className="mb-3">
              <Form.Label>Due Date</Form.Label>
              <Form.Control
                type="date"
                name="due_date"
                value={newTask.due_date}
                onChange={handleChange}
              />
            </Form.Group>
            <p className="text-muted">New events are marked as "TO DO" and saved with due date.</p>
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
