import React from 'react'
import TaskList from './Task/TaskList'
import NewTaskForm from './Task/NewTaskForm'
import './App.css'

const App = () => (
  <div className="container">
    <NewTaskForm />
    <TaskList />
  </div>
)
export default App
