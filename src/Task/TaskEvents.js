export const CREATE_TASK = 'CREATE_TASK'
export const createTask = (title, description) => ({
  type: 'CREATE_TASK',
  payload: {
    title,
    description,
  },
})

export const REMOVE_TASK = 'REMOVE_TASK'
export const removeTask = (title) => ({
  type: 'REMOVE_TASK',
  payload: { title },
})
