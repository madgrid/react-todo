import React, { Component } from "react";
import TodoItems from "./TodoItems";
import FlipMove from "react-flip-move";
import "./TodoList.css";

class TodoList extends Component {
  constructor(props) {
    super(props);

    // global state object
    this.state = {
      items: []
    }

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(e) {
    if (this._inputElement.value !== "") {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };
      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem)
        };
      });
    }

    // clear item
    this._inputElement.value = ""

    console.log(this.state.items)

    e.preventDefault();
  }

  deleteItem(key) {
    console.log(key)
    console.log(this.state)
    var filterredItems = this.state.items.filter(function(item) {
      console.log(item)
      return (item.key != key)
    });
    this.setState({
      items: filterredItems
    });
  }


  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input ref={(a) => this._inputElement = a}
              placeholder="enter task"></input>
            <button type="submit">add</button>
          </form>
        </div>
        <TodoItems entries={this.state.items} 
                    delete={this.deleteItem}/>
      </div>
    )
  }
}

export default TodoList;