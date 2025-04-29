## NESTCAFE

![image](https://github.com/user-attachments/assets/79e59c6a-b8ad-473f-8574-43fabe5707f7)




### About
The primary aim of this project was to design and develop a responsive web application that addressed the specific needs of the client’s business. The application was intended to simplify internal processes of setting tasks and enhance communication and interaction with employees.


## Primary strategic aims for website

- Create a task management system for the meeting.

- De-pixelated logos.

- No breadcrumbs.

- Make footer shorter and simpler.


### Strategy

This is a task management system which is 





## USER STORIES
1. Role-Based Permissions
User Story: Admin Full Access
As an admin, I want full read and write access to all tasks so that I can manage and modify any project work.

### Acceptance Criteria:

- Admin users can create, update, and delete any task.

- The admin dashboard lists all tasks regardless of who is assigned.

- All admin actions are secured and logged for accountability.

 

### 2. Task Management
User Story: Create and Assign Tasks (Admin)
As an admin, I want to create and assign tasks to team members so that I can manage project work efficiently.

### Acceptance Criteria:

- Admin can open a “New Task” form.

- The form collects essential details (e.g., title, description, due date).

- Admin can select one or more users to assign the task.

- Once created, the task appears in the assigned users’ task lists and on the admin dashboard.

 

### 3. Task Status Updates
User Story: Update Task Status (User)
As a user, I want to update the status of my assigned tasks so that I can reflect my current progress.

### Acceptance Criteria:

- Users can view tasks assigned to them with a clear indication of their current status.

- Each task provides an option (e.g., a dropdown menu or drag-and-drop interface) to change its status among To-do, In Progress, or Completed.

- Once updated, the new status is immediately visible to both the user and the admin.

### 4. Mobile Friendly Interface
- User Story : Mobile Responsive Design (All Users)
- As a user, I want the web app to be mobile friendly so that I can manage tasks from any device.

### Acceptance Criteria:

- The web app’s layout is responsive and adapts to various screen sizes (desktop, tablet, mobile).

- All core functionalities (task creation, assignment, status updates, and notifications) are accessible on mobile devices.

- The app is tested and performs well on popular mobile browsers (e.g., Chrome, Opera).

 

### 5. Remember Me Option for Login
- User Story: Remember Me on Login (All Users)
- As a user, I want a “Remember Me” option on the login page so that I can stay logged in on trusted devices without re-entering my credentials every time.

### Acceptance Criteria:

- A “Remember Me” checkbox is available on the login page.

- When selected, the user remains logged in for a configurable period (e.g., 7 or 30 days).

- Security measures (such as secure cookies) are in place to protect user credentials.

 

### 6. Immediate Admin Dashboard
- User Story: Direct Admin Dashboard on Login
- As an admin, I want to be taken directly to the dashboard upon logging in so that I can immediately access key project metrics and tasks.

### Acceptance Criteria:

- Admin users are redirected to the dashboard after successful login.

- The dashboard loads promptly and shows an overview of tasks and notifications.

- There are no intermediary pages or delays between login and dashboard view.

 

### 7. Reduced Scrolling and Compact Layout
- User Story: Compact Layout to Reduce Scrolling
- As a user, I want a compact and well-organized layout that minimizes the need for excessive scrolling so that I can access important information quickly.

### Acceptance Criteria:

- Key content (e.g., task lists, notifications) is accessible above the fold.

- Layout adjustments (e.g., concise headers, collapsible menus) are implemented to reduce vertical space.

- The design is tested on multiple devices to ensure minimal scrolling.

### 8. IT Support Contact Information
- User Story: IT Support Contact Info
- As a user, I want easy access to IT support contact information (admin email) instead of generic contact details so that I can quickly resolve any issues.

### Acceptance Criteria:

- The contact section displays the IT support email clearly.

- The support information is easily accessible from the login or help section.

### 9.Task Due Dates
 User Story:
- As a user, I want to set due dates so that deadlines are met effectively.

### Acceptance Criteria:

- A due date field is present when creating or editing a task.

### 10. Logout Functionality
User Story: User Logout
- As a user, I want to log out of the app so that I can secure my account when I’m finished using it.

### Acceptance Criteria:

- A visible “Logout” button is available in the navigation area.

- Clicking “Logout” ends the session and redirects the user to the login page.

 

### 11. Simple Task Sorting and Filtering
- User Story: Sort and Filter Tasks
- As a user, I want to sort and filter my tasks so that I can quickly find the most relevant ones.

### Acceptance Criteria:

- Tasks can be sorted by due date, creation date, or status.

- Filtering options (e.g., by priority or assigned user) are available.
















## WIREFRAMES




![image](https://github.com/user-attachments/assets/b31a574d-703d-4a96-9774-800220d827ad)



The wireframes were designed in mind with the requests of the client which included using a static image in the home page for example, and keeping the overall design of the pages simple and clean as to not distract from the main goal of the app which is to ensure better task management. As can be seen on the wireframe there are different versions to show the progress made according to the clients requests.









## MOOD BOARD




![image](https://github.com/user-attachments/assets/62bbb235-f72e-45ac-ad41-9f867e443019)


The moodboard as can be seen has followed exactly what has been asked which is SIMPLISTIC DESIGN, EASE OF USE, COMPREHENSIVE TOOLS, for the colour scheme the team has decided for colours which suit the logo. The design team has also made sure to choose a readable font while still maintaining professional integrity because it will be used as a task management system.







## In-Scope features

- Land on backlog page.

- Set tasks with dates.

- Be able to have different priorities task. (low, medium, high)

  # Features

The NestCafe web app includes a range of user-focused features to support agile team management:

## Navigation Menu
A fixed sidebar on the left allows users to easily switch between pages: Overview, Summary, Backlog, and Timeline.

The selected page is highlighted for clear visibility.

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

![image](https://github.com/user-attachments/assets/d64e9206-2a2f-4bf7-928a-34c4571e382c)


## Task Management (Backlog Page)
View, edit, and update tasks with assignee, status, priority, and due date fields.

![image](https://github.com/user-attachments/assets/96c80200-cb87-45a1-816f-4d61c843e381)


## Overview Dashboard
Summarizes project activity with:

A pie chart of task statuses.

A bar chart showing priority distribution.

A table listing types of work.

A recent activity list.

![image](https://github.com/user-attachments/assets/07c41bac-3d49-4373-9933-353cc2affda8)


## Timeline View
Displays tasks across a calendar grid to visualize durations and workloads.

![image](https://github.com/user-attachments/assets/9738337b-e630-42fa-86c0-9d274b403cd9)


## Deployment
The NestCafe application was deployed locally for development and testing purposes.

## Local Deployment
Follow this commands to ensure the frontend works:

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


Copy
Edit
http://localhost:3000
![Screenshot 2025-04-28 221909](https://github.com/user-attachments/assets/37bd501a-382f-4781-a153-015adb4a96bd)
![image](https://github.com/user-attachments/assets/5969074c-586f-4a90-a690-0bb53fc3ab20)

To run the Backend:
![image](https://github.com/user-attachments/assets/e12790f4-9632-4a16-b904-eddd6a8e9b25)
![image](https://github.com/user-attachments/assets/3c71afde-2484-4024-9bed-4e74b5ae48ca)


## Bugs
During the project, some bugs emerged as can be observed from the picture below, these bugs were then fixed, as can be seen in green.
![image](https://github.com/user-attachments/assets/aac72202-492c-44eb-97ce-1618b1e154df)

## Tools and Technologies

- **React** — JavaScript library for building the user interface.
- **Node.js** — Server-side JavaScript runtime.
- **Express.js** — Web server framework for Node.js.
- **MongoDB** — NoSQL database for storing users, tasks, and timeline data.
- **Bootstrap** — CSS framework for responsive design.
- **Chart.js** and **Recharts** — Used for generating project graphs (pie charts, bar graphs).
- **FontAwesome** — For UI icons.
- **GitHub** — Version control and project hosting.

## Contributors
Project owner: Rodrigo was the project owner and managed the team
Scrum Master: Rodrigo was a scrum master and helped with managing the project
Backend: Rodrigo helped create the backend
Readme: Rodrigo created the readme


## Testing and Debugging:
Comprehensive testing was done as can be seen from the screenshots below:
![image](https://github.com/user-attachments/assets/0e9bce8b-9577-424f-a90c-82d736c82a71)
![image](https://github.com/user-attachments/assets/0bef9c72-b292-4c45-9fe3-e0e0ddadfffe)
