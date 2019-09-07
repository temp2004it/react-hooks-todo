import uuid from "uuid";
import _ from "lodash";
import TodoAction from "./TodoAction";

function delItem(state, action) {
  let todos = [...state];
  _.remove(todos, todo => todo.uuid === action.uuid);
  return todos;
}

export default function todosReducer(state, action) {
  switch (action.type) {
    case TodoAction.ADD:
      let id = uuid.v4();
      return [
        ...state,
        {
          uuid: id,
          text: action.text,
          completed: false
        }
      ];
    case TodoAction.COMPLETED:
      let index = _.findIndex(state, todo => todo.uuid === action.uuid);
      if (index > -1) {
        let todos = [...state];
        let todo = todos[index];
        todo.completed = !todo.completed;
        return [...todos];
      }
      return state;

    case TodoAction.DEL:
      return delItem(state, action);

    // ... other actions ...
    default:
      return state;
  }
}
