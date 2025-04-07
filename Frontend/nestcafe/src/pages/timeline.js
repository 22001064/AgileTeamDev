import React from 'react';
import { Container, Table, Badge } from 'react-bootstrap';
import Dashboard from '../components/dashboard';

// Example tasks with start/end dates
// Adjust these to match your actual sprints, tasks, etc.
const tasks = [
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
const startDate = new Date('2025-03-27'); // adjust as needed
const endDate = new Date('2025-04-15');   // adjust as needed

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

// Helper to check if a given date is within a task’s start/end range
function isWithinRange(date, start, end) {
  return date >= start && date <= end;
}

// Helper to parse a date string (YYYY-MM-DD) into a JS Date
function parseDate(str) {
  return new Date(str + 'T00:00:00'); // ensures no timezone offset
}

// Color logic for statuses (customize as needed)
function getStatusColor(status) {
  switch (status) {
    case 'DONE':
      return '#4caf50'; // green
    case 'IN PROGRESS':
      return '#2196f3'; // blue
    case 'TO DO':
      return '#ff9800'; // orange
    default:
      return '#999';    // fallback grey
  }
}

export default function TimelinePage() {
  return (
    <Dashboard>
      <Container fluid className="p-4">
        <h2 className="mb-4">Timeline Page</h2>

        <Table bordered hover responsive>
          <thead className="table-light">
            <tr>
              {/* Left columns for the Task name and Status */}
              <th style={{ minWidth: '250px' }}>Sprint / Task</th>
              <th style={{ minWidth: '100px' }}>Status</th>

              {/* One column per day in our dateRange */}
              {dateRange.map((date) => {
                const day = date.getDate();
                const month = date.getMonth() + 1; // zero-based
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

                  {/* Status (with a badge) */}
                  <td>
                    <Badge
                      bg=""
                      style={{
                        backgroundColor: bgColor,
                        color: '#fff',
                        fontWeight: 'normal',
                      }}
                    >
                      {task.status}
                    </Badge>
                  </td>

                  {/* Day-by-day columns */}
                  {dateRange.map((date) => {
                    // If this date is within the task’s start/end, highlight it
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
    </Dashboard>
  );
}
