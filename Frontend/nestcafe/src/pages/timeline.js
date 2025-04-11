import React, { useState } from 'react';
import { Container, Table, Modal, Form, Button } from 'react-bootstrap';
import Dashboard from '../components/dashboard';

// Initial timeline events
const initialTasks = [
  {
    id: 1,
    name: 'SCRUM M1 - Find Deadline',
    status: 'DONE',
    start: '2025-03-27',
    end: '2025-03-28',
  },
  {
    id: 2,
    name: 'SCRUM M1 - Meeting 1',
    status: 'IN PROGRESS',
    start: '2025-03-28',
    end: '2025-04-01',
  },
  {
    id: 3,
    name: 'SCRUM M2 - Meeting 2',
    status: 'IN PROGRESS',
    start: '2025-04-02',
    end: '2025-04-05',
  },
  {
    id: 4,
    name: 'SCRUM M2 - Meeting 1 date change',
    status: 'TO DO',
    start: '2025-04-06',
    end: '2025-04-07',
  },
  {
    id: 5,
    name: 'SCRUM M3 - Meeting 1',
    status: 'TO DO',
    start: '2025-04-09',
    end: '2025-04-10',
  },
];

// Define the timeline range (day-by-day)
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
    case 'DONE':
      return '#4caf50'; // green
    case 'IN PROGRESS':
      return '#2196f3'; // blue
    case 'TO DO':
      return '#999'; // orange
    default:
      return '#999';    // fallback grey
  }
}

export default function TimelinePage() {
  // Manage timeline events in state
  const [tasks, setTasks] = useState(initialTasks);
  const [showModal, setShowModal] = useState(false);
  // New event form – note no status field here (defaults to "TO DO")
  const [newTask, setNewTask] = useState({ name: '', start: '', end: '' });

  // Open and close the modal
  const openModal = () => setShowModal(true);
  const closeModal = () => {
    setShowModal(false);
    setNewTask({ name: '', start: '', end: '' });
  };

  // Handle modal input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prev) => ({ ...prev, [name]: value }));
  };

  // Add a new timeline event (defaults status to "TO DO")
  const addTask = () => {
    const newId = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
    setTasks([...tasks, { id: newId, ...newTask, status: 'TO DO' }]);
    closeModal();
  };

  // Allow status changes for existing events
  const handleStatusChange = (id, newStatus) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, status: newStatus } : task));
  };

  return (
    <Dashboard>
      <Container fluid className="p-4">
        <h2 className="mb-4">Timeline Page</h2>
        <Button variant="primary" onClick={openModal} className="mb-3">
          Add Timeline Event
        </Button>
        <Table bordered hover responsive>
          <thead className="table-light">
            <tr>
              {/* Fixed columns for Task name and Status */}
              <th style={{ minWidth: '250px' }}>Sprint / Task</th>
              <th style={{ minWidth: '100px' }}>Status</th>

              {/* One column per day */}
              {dateRange.map((date) => {
                const day = date.getDate();
                const month = date.getMonth() + 1;
                return (
                  <th key={date.toISOString()} className="text-center">
                    {day}/{month}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => {
              const start = parseDate(task.start);
              const end = parseDate(task.end);
              const bgColor = getStatusColor(task.status);

              return (
                <tr key={task.id}>
                  {/* Task Name */}
                  <td>{task.name}</td>

                  {/* Status with editable dropdown styled as a colored badge */}
                  <td>
                  <Form.Select
                      value={task.status}
                      onChange={(e) => handleStatusChange(task.id, e.target.value)}
                      style={{
                        backgroundColor: bgColor,
                        color: '#fff',
                        fontWeight: 'normal',
                      }}
                    >
                      <option value="TO DO" style={{ backgroundColor: '#ff9800', color: '#fff' }}>
                        TO DO
                      </option>
                      <option value="IN PROGRESS" style={{ backgroundColor: '#2196f3', color: '#fff' }}>
                        IN PROGRESS
                      </option>
                      <option value="DONE" style={{ backgroundColor: '#4caf50', color: '#fff' }}>
                        DONE
                      </option>
                    </Form.Select>
                  </td>

                  {/* Timeline grid: color cells if date is within the event’s range */}
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

      {/* Modal for adding a timeline event */}
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
            <p className="text-muted">New events are marked as "TO DO" by default.</p>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={addTask}>
            Add Event
          </Button>
        </Modal.Footer>
      </Modal>
    </Dashboard>
  );
}
