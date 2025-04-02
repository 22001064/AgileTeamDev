import React, { useState } from 'react';
import { Container, Table, Badge, Modal, Form, Button } from 'react-bootstrap';
import Dashboard from '../components/dashboard';

// BacklogUser component manages its own task list and handles adding new tasks.
const BacklogUser = () => {
  // Initial dummy tasks
  const [tasks, setTasks] = useState([
    { id: 1, task: 'Implement login functionality', assignee: 'Alice', status: 'To Do' },
    { id: 2, task: 'Design dashboard layout', assignee: 'Bob', status: 'In Progress' },
    { id: 3, task: 'Set up database schema', assignee: 'Charlie', status: 'Complete' },
  ]);

  // State to show/hide the Add Task modal
  const [showModal, setShowModal] = useState(false);
  // New task data being entered by the user
  const [newTask, setNewTask] = useState({ task: '', assignee: '', status: 'To Do' });

  // Called when the Dashboard’s “ADD A TASK” button is clicked.
  const openAddTaskModal = () => {
    setShowModal(true);
  };

  // Called on modal form field changes
  const handleModalChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prev) => ({ ...prev, [name]: value }));
  };

  // When the user submits the modal form, add the new task to state
  const handleAddTask = () => {
    const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
    setTasks([...tasks, { id, ...newTask }]);
    // Reset the new task form and close modal
    setNewTask({ task: '', assignee: '', status: 'To Do' });
    setShowModal(false);
  };

  return (
    <>
      {/* Wrap the page content with Dashboard. 
          Note: Update your Dashboard component so that it accepts an onAddTask prop 
          and assigns it to the Add Task button’s onClick handler. */}
      <Dashboard onAddTask={openAddTaskModal}>
        <Container fluid className="p-4">
          <h2 className="mb-4">User Backlog</h2>
          <Table striped bordered hover responsive>
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Task &amp; Assignee</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <tr key={task.id}>
                  <td>{`TASK ${task.id}`}</td>
                  <td>
                    <div>{task.task}</div>
                    <div className="mt-1">
                      <Badge bg="info">{task.assignee}</Badge>
                    </div>
                  </td>
                  <td>
                    {task.status === 'To Do' && (
                      <Badge bg="warning" text="dark">
                        To Do
                      </Badge>
                    )}
                    {task.status === 'In Progress' && (
                      <Badge bg="primary">In Progress</Badge>
                    )}
                    {task.status === 'Complete' && (
                      <Badge bg="success">Complete</Badge>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </Dashboard>

      {/* Add Task Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formTaskDescription" className="mb-3">
              <Form.Label>Task Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter task description"
                name="task"
                value={newTask.task}
                onChange={handleModalChange}
              />
            </Form.Group>
            <Form.Group controlId="formAssignee" className="mb-3">
              <Form.Label>Assignee</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter assignee name"
                name="assignee"
                value={newTask.assignee}
                onChange={handleModalChange}
              />
            </Form.Group>
            <Form.Group controlId="formStatus" className="mb-3">
              <Form.Label>Status</Form.Label>
              <Form.Select name="status" value={newTask.status} onChange={handleModalChange}>
                <option value="To Do">To Do</option>
                <option value="In Progress">In Progress</option>
                <option value="Complete">Complete</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAddTask}>
            Add Task
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default BacklogUser;
