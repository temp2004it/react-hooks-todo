import uuid from "uuid";
import _ from "lodash";
import TodoAction from "./TodoAction";

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
      let { todos, completedUuid } = action;
      let index = _.indexOf(todos, todo => todo.uuid === completedUuid);
      if (index > -1) {
        let todo = todos[index];
        todo.completed = !todo.completed;
        todos[index] = _.clone(todo);
      }
      return todos;

    // ... other actions ...
    default:
      return state;
  }
}
