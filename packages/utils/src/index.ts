import { TodoItem } from '@todolist/model';

export class Generator {
  private static id = 1;

  static nextId(prefix = '') {
    return prefix + Generator.id++;
  }
}

export function toggleTodoItem(todoItem: TodoItem) {
  return { ...todoItem, done: !todoItem.done };
}

export function doneTodoItem(todoItem: TodoItem) {
  return { ...todoItem, done: true };
}