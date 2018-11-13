import React from 'react';
import './todoItem.css';
import { Button  } from 'antd';

export default class TodoItem extends React.Component {

  removeTodo(id) {
    this.props.removeTodo(id);
  }

  render() {
    return(

      <div style={{  
        height: '45px',
        borderBottom: '1px solid #efefef',
        textAlign: 'left',
        marginBottom: '10px'}}>
        <Button type="danger" onClick={(e)=> this.removeTodo(this.props.id) }>Remove</Button> <span onDoubleClick={this.changeEditMode}>{this.props.todo.text}</span> 
      </div>
    );
  }
}
