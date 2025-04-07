import React, { useState } from 'react';
import { Container, Table, Modal, Form, Button, Badge } from 'react-bootstrap';
import Dashboard from '../components/dashboard';

const BacklogUser = () => {
  // Initial dummy tasks including priority and due date
  const [tasks, setTasks] = useState([
    { id: 1, task: 'Implement login functionality', assignee: 'Alice', status: 'To Do', priority: 'High', dueDate: '2025-03-15' },
    { id: 2, task: 'Design dashboard layout', assignee: 'Bob', status: 'In Progress', priority: 'Medium', dueDate: '2025-03-20' },
    { id: 3, task: 'Set up database schema', assignee: 'Charlie', status: 'Complete', priority: 'Low', dueDate: '2025-03-10' },
  ]);

  // Modal state for adding a new task
  const [showModal, setShowModal] = useState(false);
  // New task info (status defaults to "To Do")
  const [newTask, setNewTask] = useState({ task: '', assignee: '', priority: 'Low', dueDate: '' });

  // Open the Add Task modal (triggered from the Dashboard button)
  const openAddTaskModal = () => {
    setShowModal(true);
  };

  // Handle changes for the Add Task modal form fields
  const handleModalChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prev) => ({ ...prev, [name]: value }));
  };

  // Handle adding a new task (status defaults to "To Do")
  const handleAddTask = () => {
    const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
    const taskToAdd = { id, ...newTask, status: 'To Do' };
    setTasks([...tasks, taskToAdd]);
    setNewTask({ task: '', assignee: '', priority: 'Low', dueDate: '' });
    setShowModal(false);
  };

  // Handle changing the status of an existing task
  const handleStatusChange = (id, newStatus) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, status: newStatus } : task));
  };

  return (
    <>
      <Dashboard onAddTask={openAddTaskModal}>
        <Container fluid className="p-4">
          <h2 className="mb-4">User Backlog</h2>
          <Table striped bordered hover responsive>
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Task &amp; Assignee</th>
                <th>Priority</th>
                <th>Due Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <tr key={task.id}>
                  {/* Task Number */}
                  <td>{`TSK ${task.id}`}</td>
                  
                  {/* Task description and assignee */}
                  <td>
                    <div>{task.task}</div>
                    <div className="mt-1">
                      <Badge bg="info">{task.assignee}</Badge>
                    </div>
                  </td>
                  
                  {/* Task Priority */}
                  <td>{task.priority}</td>
                  
                  {/* Due Date */}
                  <td>{task.dueDate}</td>
                  
                  {/* Editable Task Status */}
                  <td>
                    <Form.Select
                      value={task.status}
                      onChange={(e) => handleStatusChange(task.id, e.target.value)}
                    >
                      <option value="To Do">To Do</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Complete">Complete</option>
                    </Form.Select>
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
            <Form.Group controlId="formPriority" className="mb-3">
              <Form.Label>Priority</Form.Label>
              <Form.Select
                name="priority"
                value={newTask.priority}
                onChange={handleModalChange}
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </Form.Select>
            </Form.Group>
            <Form.Group controlId="formDueDate" className="mb-3">
              <Form.Label>Due Date</Form.Label>
              <Form.Control
                type="date"
                name="dueDate"
                value={newTask.dueDate}
                onChange={handleModalChange}
              />
            </Form.Group>
            <p className="text-muted">New tasks are marked as "To Do" by default.</p>
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
