import * as React from 'react';
import { Component } from 'react';
import { TodoItem as TodoItemModel } from '@todolist/model';

import './TodoItem.scss';
import { Generator } from '@todolist/utils';

interface IProps {
  item: TodoItemModel;
  onToggle(todoItem: TodoItemModel): void;
}

export class TodoItem extends Component<IProps> {
  render() {
    const { text, done, createdAt } = this.props.item;
    const id = Generator.nextId('todo-item-');
    return <div className="todo-item">
      <label htmlFor={id} className="todo-item__content">
        <input type="checkbox" id={id}
               className="todo-item__done"
               checked={done}
               onChange={this.onToggle}
        />
        <p className="todo-item__text">{text}</p>
      </label>
      <p className="todo-item__date">{createdAt.toLocaleString()}</p>
    </div>
  }
  private onToggle = () => {
    this.props.onToggle(this.props.item);
  }
}