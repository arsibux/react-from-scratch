import React from 'react'
import './TaskListItem.css'

const TaskListItem = ({ task, onRemovePressed }) => (
  <div className="task-item-container">
    <h3 className="task-title">{task.title}</h3>
    <div className="task-description">{task.description}</div>
    <div className="task-buttons-list">
      <button onclick={()=>(onRemovePressed(task.title))} className="mark-as-completed">Mark as completed</button>
      <button className="delete">Delete</button>
    </div>
  </div>
)
export default TaskListItem
