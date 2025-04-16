import React, { useState, useEffect } from 'react';
import { Container, Table, Modal, Form, Button, Badge } from 'react-bootstrap';
import Dashboard from '../components/dashboard';

const BacklogUser = () => {
  // Initial dummy tasks (existing tasks may have varied statuses)
  const [tasks, setTasks] = useState([]);

  // Modal state for adding a new task
  const [showModal, setShowModal] = useState(false);
  // New task state: no status field because new tasks default to "To Do"
  const [newTask, setNewTask] = useState({ task: '', assignee: '', priority: 'Low', dueDate: '' });
  // State for editing an existing task (if needed)
  const [editingTaskId, setEditingTaskId] = useState(null);

  // Fetch tasks from the backend
  useEffect(() => {
    fetch('http://localhost:8000/tasks/')
      .then((response) => response.json())
      .then((data) => setTasks(data));
  }, []);

  // Opens the modal for adding a new task
  // Resets the new task state and close the modal
  const openAddTaskModal = () => {
    setNewTask({
      task: '',
      assignee: '',
      priority: 'Low',
      dueDate: '',
      status: 'To Do'
    });
    setEditingTaskId(null);
    setShowModal(true);
  };

  // Handles modal field changes
  const handleModalChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prev) => ({ ...prev, [name]: value }));
  };

  // Handles adding a new task or updating an existing one
  const handleAddTask = () => {
    const url = editingTaskId
      ? `http://localhost:8000/tasks/${editingTaskId}/`
      : 'http://localhost:8000/tasks/';
    const method = editingTaskId ? 'PUT' : 'POST';

    fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTask),
    })
      .then((res) => res.json())
      .then((data) => {
        if (editingTaskId) {
          setTasks((prev) =>
            prev.map((t) => (t.id === editingTaskId ? { ...newTask, id: t.id } : t))
          );
        } else {
          setTasks((prev) => [...prev, { ...newTask, id: data.id }]);
        }
        setNewTask({ task: '', assignee: '', priority: 'Low', dueDate: '', status: 'To Do' });
        setEditingTaskId(null);
        setShowModal(false);
      });
  };

  // Handles editing an existing task
  const handleEditTask = (task) => {
    setNewTask(task);
    setEditingTaskId(task.id);
    setShowModal(true);
  };

  // Handles deleting a task
  const handleDeleteTask = (id) => {
    fetch(`http://localhost:8000/tasks/${id}/`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then(() => {
        setTasks((prev) => prev.filter((task) => task.id !== id));
      });
  };

  // Allow status changes for existing tasks
  const handleStatusChange = (id, newStatus) => {
    const updatedTask = tasks.find(t => t.id === id);
    fetch(`http://localhost:8000/tasks/${id}/`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...updatedTask, status: newStatus })
    })
      .then(res => res.json())
      .then(() => {
        setTasks(tasks.map(task => task.id === id ? { ...task, status: newStatus } : task));
      });
  };

  // Returns a background color based on the status
  function getStatusColor(status) {
    switch (status) {
      case 'To Do':
        return '#999'; // orange
      case 'In Progress':
        return '#36a2eb'; // blue
      case 'Complete':
        return '#4caf50'; // green
      default:
        return '#999';    // fallback grey
    }
  }

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
                <th>Actions</th>
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
                  
                  {/* Status cell with a styled dropdown */}
                  <td>
                    <Form.Select
                      value={task.status}
                      onChange={(e) => handleStatusChange(task.id, e.target.value)}
                      style={{
                        backgroundColor: getStatusColor(task.status),
                        color: '#fff',
                        fontWeight: 'bold',
                        border: 'none'
                      }}
                    >
                      <option value="To Do">To Do</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Complete">Complete</option>
                    </Form.Select>
                  </td>
                  <td>
                    <Button
                      size="sm"
                      variant="outline-primary"
                      className="me-2"
                      onClick={() => handleEditTask(task)}
                    >
                      Edit
                    </Button>
                    <Button
                      size="sm"
                      variant="outline-danger"
                      onClick={() => handleDeleteTask(task.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </Dashboard>

      {/* Modal for adding a new task */}
      <Modal show={showModal} onHide={() => {
        setShowModal(false);
        setNewTask({ task: '', assignee: '', priority: 'Low', dueDate: '', status: 'To Do' });
        setEditingTaskId(null);
      }}>
        <Modal.Header closeButton>
          <Modal.Title>{editingTaskId ? 'Edit Task' : 'Add New Task'}</Modal.Title>
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
          <Button variant="secondary" onClick={() => {
            setShowModal(false);
            setNewTask({ task: '', assignee: '', priority: 'Low', dueDate: '', status: 'To Do' });
            setEditingTaskId(null);
          }}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAddTask}>
            {editingTaskId ? 'Update Task' : 'Add Task'}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default BacklogUser;
