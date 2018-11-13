import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import TodoInput from './todoInput';
import TodoItem from './todoItem';
import { Card } from 'antd';
import 'antd/dist/antd.css'; 

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      nextId: 1
    };

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo(todoText) {
    let todos = this.state.todos.slice();
    todos.push({id: this.state.nextId, text: todoText});
    this.setState({
      todos: todos,
      nextId: ++this.state.nextId
    });
  }

  removeTodo(id, todo) {
    console.log("Deleted ");
    this.setState({
        todos: this.state.todos.filter((todo, index) => todo.id !== id)
      });
      
  }
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
          <Card title="React To-Do App" bordered={false} style={{ width: 550, height:300 }}>
          <TodoInput todoText="" addTodo={this.addTodo} />
          <ul style={{paddingTop:'0',paddingBottom:'10px'}}>
            {
              this.state.todos.map((todo) => {
                return <TodoItem todo={todo} key={todo.id} id={todo.id} removeTodo={this.removeTodo}/>
              })
            }
          </ul>
        </Card>
        </Cell>
        </Grid>
      </div>
    )
  }
}

export default Index;
