import React, { Component } from "react";
import TodoListItem from './TodoListItem';

class TodoList extends Component {
  state = { 
    items: [],
    itemVal: '',
    cssEditInput: 'displayNone'
   }

   handleItemValueChange = (e) => {
    this.setState({itemVal: e.target.value})
  }

  handleItemCreateClick = () => {
    const items = [...this.state.items];
    if (this.state.itemVal.length <= 0) {return null;}
    items.push(this.state.itemVal);

    this.setState({
      items,
      itemVal: '',
    })
  }

  handleChange = (item,e) => {
    console.log("SUP")
    const items = [...this.state.items];
    const key = items.indexOf(item);
    items[key] = e.target.value;
    this.setState({items})
  }

  handleItemEdit = (e) => {
    this.setState({cssEditInput: 'form-control displayBlock'})
  }

  handleClickSave = (item, e) => {
    const items = [...this.state.items];
    const key = items.indexOf(item);
    items[key] = e;
    this.setState({items, cssEditInput: 'displayNone'}, () => {console.log(this.state.items)});
  }

  handleDeleteItem = (item) => {
    const items = [...this.state.items];
    const key = items.indexOf(item);
    items.splice(key, 1);
    this.setState({items})
  }

  renderTodoItem(item) {
    const randomKey = require('uuid/v4');
    return <TodoListItem 
    key={randomKey()} 
    value={item} 
    cssEditInput={this.state.cssEditInput}
    onItemEditClick={this.handleItemEdit}
    onClickSave={(e) => this.handleClickSave(item, e)}
    onItemDeleteClick={() => this.handleDeleteItem(item)}
    />;
  }

  render() { 

    return ( 
      <div className="todo-list col-xs-12 col-lg-10 offset-1">
        <div className="todo-list-new-item">
          <div className="input-group mb-3">
            <input 
            type="text" 
            value={this.state.itemVal} 
            className="form-control input-new-item" 
            placeholder="What you'll do later...?" 
            aria-label="What you'll do later...?" 
            aria-describedby="button-addon2"
            onChange={(e) => {this.handleItemValueChange(e)}} 
            />

            <div className="input-group-append">
              <button 
              className="btn btn-primary" 
              type="button" 
              id="button-addon2" 
              onClick={this.handleItemCreateClick}
              >
              Create
              </button>
            </div>
          </div>
        </div>
        <h1>My TODO List:</h1>
        {this.state.items.map(item => this.renderTodoItem(item))}
      </div>
     );
  }
}
 
export default TodoList;