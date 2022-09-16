import React from 'react'
import TaskListItem from '../Task/TaskListItem.js'
import { connect } from 'react-redux'
import '../Task/TaskList.css'

const TaskList = ({ tasks = [], onRemovePressed }) => (
  <div className="task-wrapper">
    <h2 className="title">List of Tasks</h2>
    <ul>
      {tasks.map((task) => (
        <TaskListItem task={task} onRemovePressed={onRemovePressed} />
      ))}
    </ul>
  </div>
)
const mapStateToProps = (state) => ({
  tasks: state.tasks,
})
const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (title) => dispatch(removeTask(title)),
})
export default connect(mapStateToProps, mapDispatchToProps)(TaskList)
