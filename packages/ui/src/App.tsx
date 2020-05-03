import React, { Component } from 'react';
import './App.scss';
import { TodoListStore } from './TodoListStore';
import { TodoItem } from './components/TodoItem/TodoItem';
import { toggleTodoItem } from '@todolist/utils';
import { TodoItem as TodoItemModel } from '@todolist/model';

class App extends Component {
  state = new TodoListStore();
  render() {
    return (
      <div className="container app">
        {
          this.state.todos.map((item, idx) =>
            <TodoItem key={idx}
                      item={item}
                      onToggle={this.onToggle}/>
          )
        }
      </div>
    );
  }
  onToggle = (todo: TodoItemModel) => {
    this.setState({
      todos: this.state.todos.map(item => {
        return item === todo
          ? toggleTodoItem(item)
          : item;
      })
    });
  }
}

export default App;
