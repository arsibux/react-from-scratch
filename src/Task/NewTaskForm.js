import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createTask } from './TaskEvents'
import './NewTaskForm.css'

const NewTaskForm = (tasks, onCreatePressed) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  return (
    <form className="create-task-form">
      <label className="title">Title:</label>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label className="description">Description:</label>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        onclick={() => {
          const isDuplicateTask = tasks.some((task) => task.title === title)
          if (!isDuplicateTask) {
            onCreatePressed(title, description)
            setTitle('')
            setDescription('')
          }
        }}
        className="btn btn-primary"
      >
        New Task
      </button>
    </form>
  )
}
const mapStateToProps = (state) => ({
  tasks: state.tasks,
})
const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: (title, description) =>
    dispatch(createTask(title, description)),
})
export default connect(mapStateToProps, mapDispatchToProps)(NewTaskForm)
