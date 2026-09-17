# ⚡ Dev Stack

A web application designed to help developers explore, compare, and build their ideal technology stack for modern software projects.

---

### 📝 Description
**Dev Stack** lets users browse through various frontend frameworks, backend runtimes, databases, languages, and tools. Users can evaluate different technologies side-by-side and select tools to dynamically assemble, manage, and visualize their custom development stack.

---

### 🚀 Technologies Used
* **React**: For component-based UI architecture
* **Tailwind CSS**: For modern, utility-first styling
* **JavaScript (ES6+)**: Core application logic
* **JSON**: Data store for tech stack information

---

### ✨ Features
* **Interactive Stack Builder**: Add or remove technologies dynamically to build and customize your personal stack in real time.
* **Smart Categorization & Ratings**: Easily view complexity levels, difficulty tags, and user ratings for every framework and tool.
* **One-Click Stack Management**: Clear your selected stack with a single click or manage items individually using responsive action buttons.

---

## ❓ React Questions & Answers

**1. What is JSX, and why is it used in React?**  
JSX (JavaScript XML) is a syntax extension that lets you write HTML-like markup directly inside JavaScript files. It is used in React because it makes building UI components much more readable, intuitive, and easier to maintain.

**2. What is the difference between props and state?**  
* **Props**: Short for "properties," props are read-only data passed down from a parent component to a child component.  
* **State**: Data managed locally *within* a component that can change over time, triggering a re-render when updated.

**3. What does the `useState` hook do, and where did you use it in this project?**  
`useState` adds state management to functional components, allowing you to track and update variable values. In this project, it was used to manage the list of selected technologies in the "Your Stack" sidebar and to keep track of the technologies loaded from the JSON data.

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**  
`useEffect` handles side effects in React, such as fetching data or setting up listeners. It was needed to fetch the technology data from the local JSON file when the component first rendered on the screen.

**5. Why does every item in a `.map()` list need a unique `key` prop?**  
Unique keys help React identify which items in a list have changed, been added, or been removed. This allows React to efficiently update only the changed elements in the DOM instead of re-rendering the entire list.

**6. What is conditional rendering? Show one place you used it.**  
Conditional rendering is showing or hiding UI elements based on specific conditions or state. In this project, it was used in the "Your Stack" section to display a message like *"No items selected"* when the stack array is empty, and show the selected list along with the "Remove All" button when items exist.

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**  
Data flows from a parent to a child component via **props**. To send data back to the parent, the parent passes down a callback function as a prop, which the child invokes with the required data when an event (like a button click) occurs.
