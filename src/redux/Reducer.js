import { ADD_TODO, EDIT_TODO, DELETE_TODO, DONE_TODO, FILTER_TODO } from "./Actiontype";

const initialState = {
  todos: [],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };

    case EDIT_TODO:
      return {...state,
        todos: state.todos.map((todo) => 
           todo.id === action.id ? { ...todo, description: action.description } : todo
        ),
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case DONE_TODO:
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
        ),
      };
      case FILTER_TODO:
        return{
          ...state,todos: state.todos.filter((todo)=>)
        }
    default:
      return state;
  }
};
