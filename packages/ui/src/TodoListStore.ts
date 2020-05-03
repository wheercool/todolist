import { TodoItem } from '@todolist/model';

export class TodoListStore {
  todos: TodoItem[];
  constructor() {
    this.todos = [
      new TodoItem('Create monorepo with lerna', true),
      new TodoItem('Setup tsconfig to work properly with IDEs')
    ];
  }
}