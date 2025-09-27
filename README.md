

### ✅ Readme: 

#### React Concepts

- **What is JSX, and why is it used?**  
  JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. It is used in React to describe what the UI should look like. JSX makes the code more readable and closer to the actual HTML structure, enabling developers to build complex UIs more intuitively. Under the hood, JSX is transpiled to React.createElement() calls by Babel.

- **What is the difference between State and Props?**  
  State is a built-in object in React components that holds data that can change over time and triggers re-renders when updated. It is mutable and managed internally by the component. Props (properties) are read-only data passed from a parent component to a child component. They allow data flow down the component tree but cannot be modified by the child; changes must come from the parent.

- **What is the useState hook, and how does it work?**  
  useState is a React Hook that allows functional components to have state. It returns an array with two elements: the current state value and a setter function to update it. When the setter is called, it schedules a re-render with the new state value. Example: `const [count, setCount] = useState(0);` initializes count to 0 and provides setCount to update it.

- **How can you share state between components in React?**  
  State can be shared by lifting it up to the nearest common ancestor (parent) component and passing it down via props. For more complex sharing, use Context API to provide state globally without prop drilling, or state management libraries like Redux for larger apps. For sibling components, the parent manages the state and passes setter functions as props.

- **How is event handling done in React?**  
  Event handling in React uses synthetic events, which wrap native browser events for consistency across browsers. Attach event handlers to JSX elements using camelCase attributes (e.g., onClick). The handler is a function that receives the event object as an argument. Example: `<button onClick={handleClick}>Click me</button>`, where handleClick is defined in the component.

### 

## 📌 Challenge Requirements 

### 🔔 React-Toastify 

* Used **React-Toastify** to replace all alerts with stylish toast notifications.

### 📝 Task Completion Logic

Clicking **Complete Button**:

1. It is **removed from Task Status**. 
2. It is added to the **Resolved List**. 
3. The **In Progress count decreases**. 
4. The **Resolved count increases**. 
5. It is removed from the **Customer Tickets list**. 

---

## 📌 Implemented Functionalities

### Overview
This React application implements a Customer Support Zone for managing tickets. It displays a list of customer tickets, allows adding them to an in-progress task status, and marking them as resolved with real-time updates to statistics and toast notifications.

### Key Features
- **Navbar**: Logo on left, navigation menu (Home, FAQ, Blog, Download, Contact) and New Ticket button on right. New Ticket triggers a toast notification.
- **Banner**: Purple gradient background with two stat cards showing dynamic In-Progress and Resolved counts (start at 0). Stat cards feature symmetric vector patterns (original on right, mirrored/reversed on left via scaleX(-1), equal 50% size over gradients).
- **Ticket Management**:
  - 12 sample tickets in JSON data, displayed in a 2-column grid of cards on desktop.
  - Each card shows: title + Open status badge (green), description, priority badge (red high, yellow medium, blue low) + customer name/date, Add to Task Status button.
  - Click Add: Removes ticket from list, adds to In-Progress sidebar, increments In-Progress count, shows toast "Ticket added to Task Status".
- **Task Status Sidebar**:
  - **In-Progress**: White box with ticket titles and green Complete buttons (empty initially).
  - **Resolved**: Gray list of completed tickets (empty initially).
  - Click Complete: Removes from In-Progress, adds to Resolved, decrements In-Progress count, increments Resolved count, removes from original tickets list, shows toast "Ticket completed and resolved".
- **Footer**: 5-column grid (desktop): About section with description, Company/Services/Information links (no bullets), Social Links with white icons (Twitter, LinkedIn, Facebook) + "@CS — Ticket System" text, and MdEmail icon + "support@cst.com" (flex aligned with 8px gap, no dots/bullets). Copyright footer.
- **Responsiveness**: Mobile-friendly (≤768px): Single-column layout for main grid/tickets/stats/footer, stacked navbar menu, full-width stat cards.
- **Notifications**: React-Toastify for stylish toasts replacing alerts (New Ticket, Add, Complete actions).

### Technologies Used
- React 18 (functional components, useState for shared state in App.js: allTickets/inProgress/resolved arrays, handlers passed as props).
- React-Toastify (^10.0.5) for notifications (configured in App.js with ToastContainer).
- React Icons (^4.10.1) for social/email icons.
- CSS: Grid/Flexbox for layouts, custom gradients/badges/vectors in App.css.
- JSON data in src/tickets.js for 12 tickets with properties: id, title, description, customer, priority (high/medium/low), status (open), createdAt.

### Setup Instructions
1. Clone the repository (already done).
2. Navigate to the project: `cd B12A7-Customer-Support-Zone`
3. Install dependencies: `npm install`
4. Start the server: `npm start` (runs on http://localhost:3001)
5. Open in browser to interact with tickets.

The app is fully functional, with no compilation errors, and matches the Figma design including vector symmetries and icon alignments.





