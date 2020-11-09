import { ADD_TODO, EDIT_TODO, DELETE_TODO, DONE_TODO, FILTER_TODO } from "./Actiontype";

export const AddTodo = (payload) => {
  return {
  type: ADD_TODO,
  payload
}
};
export const EditTodo = (id, description) => {
  return {
  type: EDIT_TODO,
  id,
  description,
}
};
export const DeleteTodo = (payload) => {
    return {
        type: DELETE_TODO,
        payload
    }
};
export const DoneTodo = (payload) => {
    return {
        type: DONE_TODO,
        payload
    }
}
export const FilterTodo = (payload) => {
  return {
    type: FILTER_TODO,
    payload
  }
}


