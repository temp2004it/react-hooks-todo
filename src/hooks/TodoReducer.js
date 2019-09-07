import uuid from "uuid";
import _ from "lodash";
import TodoAction from "./TodoAction";

export default function todosReducer(state, action) {
  switch (action.type) {
    case TodoAction.CREATE:
      return createItem(state, action);
    case TodoAction.COMPLETED:
      return completeItem(state, action);
    case TodoAction.DEL:
      return delItem(state, action);
    case TodoAction.EDIT:
      return updateItem(state, action);
    default:
      return state;
  }
}

function updateItem(state, action) {
  let index = _.findIndex(state, todo => todo.uuid === action.uuid);
  if (index === -1) return state;
  let todos = [...state];
  let todo = todos[index];
  todo.text = action.text;
  return todos;
}

function completeItem(state, action) {
  let index = _.findIndex(state, todo => todo.uuid === action.uuid);
  if (index > -1) {
    let todos = [...state];
    let todo = todos[index];
    todo.completed = !todo.completed;
    return todos;
  }
  return state;
}

function createItem(state, action) {
  let id = uuid.v4();
  return [
    ...state,
    {
      uuid: id,
      text: action.text,
      completed: false
    }
  ];
}

function delItem(state, action) {
  let todos = [...state];
  _.remove(todos, todo => todo.uuid === action.uuid);
  return todos;
}
