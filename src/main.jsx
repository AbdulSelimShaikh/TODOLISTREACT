import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoProvider from './context/TodoProvider.js'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <TodoProvider>
  <App />
  </TodoProvider>
  
  </React.StrictMode>,
)
