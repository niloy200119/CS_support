# CS — Ticket System

A React-based customer support ticket management system. Built with React, Vite, and Tailwind CSS.

Live: [Vercel Deployment](#)

---

## What is JSX, and why is it used?

JSX stands for JavaScript XML. It lets you write HTML-like syntax directly inside JavaScript code. React uses JSX because it makes it easier to visualize the UI structure while writing components. Under the hood, JSX gets compiled to `React.createElement()` calls by tools like Babel. So instead of manually creating elements with function calls, you just write something that looks like HTML and it keeps the code readable.

## What is the difference between State and Props?

Props are values passed from a parent component to a child component — they are read-only and the child cannot modify them. State is data that belongs to a component itself and can change over time. When state changes, the component re-renders. Think of props as function arguments and state as variables declared inside the function.

For example, in this project the `tickets` array is state in `App.jsx`, but when a single ticket is passed to `TicketCard`, it becomes a prop for that component.

## What is the useState hook, and how does it work?

`useState` is a React hook that lets you add state to functional components. You call it with an initial value and it returns an array with two things — the current state value and a function to update it.

```jsx
const [count, setCount] = useState(0);
```

When you call `setCount(5)`, React schedules a re-render and on the next render `count` will be `5`. The state persists between renders.

## How can you share state between components in React?

The most common way is lifting state up. You move the shared state to the closest common parent component and pass it down via props. In this project, `App.jsx` holds the `inProgress` and `resolved` arrays and passes them to both `Banner` (for counts) and `TaskStatus` (for the list).

Other approaches include Context API for deeply nested components and state management libraries like Redux or Zustand for larger apps.

## How is event handling done in React?

You attach event handlers directly on JSX elements using camelCase attributes like `onClick`, `onChange`, `onSubmit` etc. The handler is a JavaScript function.

```jsx
<button onClick={() => handleComplete(task)}>Complete</button>
```

React uses a synthetic event system that wraps the native browser events, making them work consistently across browsers. You pass functions as handlers, not strings like in vanilla HTML.
