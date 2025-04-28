Features
![image](https://github.com/user-attachments/assets/dcc06097-cf7f-4f72-bfee-9c51c22b06b2)
The header element of the website is complete with the Nestcafe logo, which is consistent throughout the website. 

The NestCafe web application presents a clean and modern user interface, focusing on clarity and ease of use. A neutral color palette consisting mainly of beige tones is used throughout the site, giving it a warm and professional look while ensuring excellent contrast and readability.

Each page follows a consistent layout:

A fixed top navigation bar that provides quick access to key functions such as search, task creation, support, and logout.

A left-hand side vertical menu to navigate easily between "Overview," "Summary," "Backlog," and "Timeline" pages.

Main content areas that vary based on the page selected, displaying tables, forms, or visual graphs in a card-style layout.

Typography emphasizes legibility with clean, sans-serif fonts and clear section titles like "Timeline Page" or "Overview," helping users to quickly understand the purpose of each page.

Imagery and icons are minimal but effectively used, such as profile avatars, loading indicators, and task status labels. Dropdowns, graphs, and task cards maintain a professional and polished appearance through consistent padding, hover effects, and borders.

The responsive design ensures that the platform remains usable across different devices. Buttons such as "Add a Task," "Add Timeline Event," and form inputs maintain appropriate sizing for ease of interaction both on desktop and smaller screens.

Visual feedback, such as validation errors and modals (e.g., unauthorized login attempt warnings), are styled consistently to match the overall design, ensuring users are properly guided throughout the application.


Features
The NestCafe web app includes a range of user-focused features to support agile team management:

Navigation Menu
A fixed sidebar on the left allows users to easily switch between pages: Overview, Summary, Backlog, and Timeline.

The selected page is highlighted in blue for clear visibility.

📸 Place an image here showing the sidebar menu active (like your screenshot showing "Timeline" selected)

Top Navigation Bar
The top bar provides quick access to:

A Support section with a user avatar.

A Search bar for fast searching of tasks and information.

An "Add a Task" button for quickly creating new entries.

A Username area with a logout button.

📸 Place an image here showing the top bar (showing Search bar, Add Task, Support icon, Username/Logout)

Authentication (Login Page)
The login system supports user role verification, ensuring correct access levels.

Users receive clear error feedback if login fails, including "Unauthorized login attempt: Wrong role" messages.

Validation is in place for email and password formats.

📸 Place an image here showing the login form with the error or validation messages

Task Management (Backlog Page)
Users can view, edit, and update tasks directly from the backlog.

Tasks include details like Assignee, Status (To Do, In Progress, Complete), Priority, and Due Date.

📸 Place an image here showing the Backlog page with the task list and Edit Task popup

Overview Dashboard
The Overview page features:

A pie chart summarizing tasks by status (To Do, In Progress, Complete).

A bar chart breaking down tasks by priority (High, Medium, Low).

A table showing the type of work (Bug, Task, Feature).

A recent activity list for quick updates.

📸 Place an image here showing the full dashboard overview (the one with pie chart, bar graph, table, and activity list)

Timeline View
The Timeline page displays tasks across a calendar-like grid, showing the duration of assigned tasks across dates.

📸 Place an image here showing the Timeline view

Deployment
The NestCafe application was deployed locally for development and testing purposes. The setup involves a frontend React application connected to a backend server.

Local Deployment Process
To run the project locally, follow these steps:

Clone the repository:

bash
Copy
Edit
git clone https://github.com/yourusername/NestCafe.git
Navigate to the frontend folder:

bash
Copy
Edit
cd Frontend/nestcafe
Install dependencies:

bash
Copy
Edit
npm install
Start the development server:

bash
Copy
Edit
npm start
Open your browser and navigate to:

arduino
Copy
Edit
http://localhost:3000
to view the running application.

📸 (Optional):
You can place a screenshot here showing the terminal after npm start, where it says "compiled successfully" or "running on localhost:3000" if you want.

Production Deployment (Optional)
If deploying to a production environment (such as Vercel, Netlify, or a private server), a production build can be generated:

Create the build folder:

bash
Copy
Edit
npm run build
Upload the build folder to your hosting service of choice.

📸 (Optional):
If you later deploy online, you can also place a screenshot here showing the live site or hosting panel.


Bugs
Throughout development and testing of the NestCafe application, a few bugs were encountered and addressed:

Bug Fixes and Improvements
Unauthorized Login Attempt Warning
When a user tried to log in with an incorrect role (e.g., logging in as Admin when only User access was allowed), a warning modal appeared stating:
"Unauthorized login attempt: Wrong role."
This was handled properly by adding client-side and server-side validation, improving the overall user feedback.

📸 Place an image here showing the "Unauthorized login attempt: Wrong role" popup

Form Validation on Login Page
Initially, there were issues where users could attempt to log in with invalid email formats or passwords under 8 characters.
This was fixed by adding real-time validation for email and password fields.

📸 Place an image here showing the Login page with validation errors

Task Status Update Alignment
Minor UI misalignment was detected when updating task statuses in the Backlog page. The dropdown menus were adjusted to align correctly within the task table after editing.

Timeline Display Adjustment
On the Timeline page, initial rendering issues where task bars overlapped were fixed by improving the spacing logic between dates and task durations.

Known Minor Issues (Remaining Bugs)
Navigation menu does not auto-collapse after selection on smaller screens
When using the sidebar on mobile or small devices, the menu stays open after selecting an item and needs to be manually collapsed.
However, the page still correctly loads the selected section.

📸 (Optional): If you can reproduce this on mobile and want, you can add a small screenshot showing the menu open after selecting an option.

Credits
The NestCafe application was developed as part of a team project focusing on creating a team management system to support agile workflows.

Contributors
Frontend Development:
Responsible for building the user interface, including login pages, dashboard views (Overview, Timeline, Backlog), and handling UI interactions.

Backend Development:
Focused on server-side functionality, including authentication, user role verification, database operations, and API connections.

Testing and Debugging:
Team members collaborated on cross-browser testing, validation handling, and bug tracking to ensure smooth performance across devices.

Resources Used
React – Framework used for building the frontend.

Node.js / Express.js – Used for backend server operations.

MongoDB / Database – For managing user data, tasks, timelines.

Bootstrap – For responsive UI elements such as modals, forms, and nav menus.

Chart.js / Recharts – For visual graphs like pie charts and bar charts on the dashboard.

FontAwesome – For icons in the top navigation and support section.

External Help
Stack Overflow – For troubleshooting JavaScript and React-specific issues.

W3Schools / MDN Web Docs – For referencing HTML, CSS, and JavaScript standards.

Google Fonts – For typography customization.

Freepik (optional) – If you used any external free images.


