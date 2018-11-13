import React from 'react';
import './todoInput.css';
import 'antd/dist/antd.css';
import { Button, Input } from 'antd';

export default class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: this.props.todoText};

    this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  addTodo(todo) {
    if (todo.length > 0) {
      this.props.addTodo(todo);
      this.setState({value: ''});
      console.log('value');
    }
  }

  render() {
    return (
      <div>
        <Input size="large" placeholder="Add To Do" style={{ width: '370px'}} value={this.state.value} onChange={this.handleChange}/>
        <Button type="primary" style={{height:'40px'}} onClick={() => this.addTodo(this.state.value)}>Submit</Button>
      </div>
    );
  }
}
