import { CREATE_TASK, REMOVE_TASK } from './TaskEvents'
export const tasks = (state=[], action) => {
  const { type, payload } = action

  switch (type) {
    case CREATE_TASK: {
      const { title, description } = payload
      const newTask = {
        title: title,
        description: description,
        isCompleted: false,
      }
      return state.concat(newTask)
    }
    case REMOVE_TASK: {
      const { title } = payload
      return state.filter((task) => task.title !== task.title)
    }
    default:
      return state
  }
}
