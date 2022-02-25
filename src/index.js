import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './App';


const DATA = [
  { id: "todo-0", name: "Create theme", completed: true },
  { id: "todo-1", name: "Work on wordpress", completed: false },
  { id: "todo-2", name: "Organize office main department", completed: false },
  { id: "todo-2", name: "Error solve in HTML template", completed: false }
];

ReactDOM.render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>,
  document.getElementById('root')
);