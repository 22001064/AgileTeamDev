# Features

The NestCafe web app includes a range of user-focused features to support agile team management:

## Navigation Menu
A fixed sidebar on the left allows users to easily switch between pages: Overview, Summary, Backlog, and Timeline.

The selected page is highlighted in blue for clear visibility.

![image](https://github.com/user-attachments/assets/c22ed925-5a1e-4d59-96c2-2df66d0a49b6)


## Top Navigation Bar
The top bar provides quick access to:

A Support section with a user avatar.

A Search bar for fast searching of tasks and information.

An "Add a Task" button for quickly creating new entries.

A Username area with a logout button.

![image](https://github.com/user-attachments/assets/e4bb7e12-dd9f-46b5-9914-1e912bd1551e)


## Authentication (Login Page)
Supports user role verification, ensuring correct access levels.

Displays error feedback like "Unauthorized login attempt: Wrong role."

Includes real-time email and password validation.

(Insert screenshot here showing login page error.)

## Task Management (Backlog Page)
View, edit, and update tasks with assignee, status, priority, and due date fields.

![image](https://github.com/user-attachments/assets/96c80200-cb87-45a1-816f-4d61c843e381)


## Overview Dashboard
Summarizes project activity with:

A pie chart of task statuses.

A bar chart showing priority distribution.

A table listing types of work.

A recent activity list.

(Insert screenshot here showing dashboard overview.)

## Timeline View
Displays tasks across a calendar grid to visualize durations and workloads.

![image](https://github.com/user-attachments/assets/9738337b-e630-42fa-86c0-9d274b403cd9)


## Deployment
The NestCafe application was deployed locally for development and testing purposes.

Local Deployment
Clone the repository:

bash
Copy
Edit
git clone https://github.com/yourusername/NestCafe.git
Navigate to the frontend:

bash
Copy
Edit
cd Frontend/nestcafe
Install dependencies:

bash
Copy
Edit
npm install
Run the development server:

bash
Copy
Edit
npm start
Open your browser:

arduino
Copy
Edit
http://localhost:3000
(Insert screenshot here showing terminal after npm start.)

Production Deployment (Optional)
Build production files:

bash
Copy
Edit
npm run build
Upload the build folder to your hosting service (e.g., Vercel, Netlify).

Bugs
Bug Fixes and Improvements
Unauthorized Login Attempt Warning
Proper validation added for incorrect role login attempts.

(Insert screenshot here showing unauthorized login attempt popup.)

Form Validation on Login Page
Real-time email/password format validation implemented.

(Insert screenshot here showing validation errors on login page.)

Task Status Update Alignment
UI fixes made to properly align task status dropdowns.

Timeline Display Adjustment
Improved spacing to prevent task bar overlapping.

Known Minor Issues
Sidebar does not auto-collapse on mobile devices after selection.

(Optional: Insert screenshot showing sidebar open on mobile.)

## Credits
## Contributors
Frontend Development: UI development, authentication pages, dashboard, task management.

## Backend Development: Server-side API creation, database handling, authentication logic.

## Testing and Debugging: Cross-browser testing, bug reporting, UI adjustments.

Resources Used
React (Frontend framework)

Node.js / Express.js (Backend server)

MongoDB (Database)

Bootstrap (CSS framework for responsive UI)

Chart.js / Recharts (Data visualization libraries)

FontAwesome (Icons)

External Help
Stack Overflow, W3Schools, MDN Web Docs for code references.

Google Fonts for typography.

Freepik for external images (if used).


