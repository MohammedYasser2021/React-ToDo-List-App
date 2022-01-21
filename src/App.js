import React, { Component } from 'react'
import AddItems from './components/addItems/addItems'
import TodoItems from './components/todoItems/todoItems'

class App extends Component {
  state = {
    items: [
      { id: 1, name: 'Mohammed', age: 22 },
      { id: 2, name: 'Ali', age: 23 },
      { id: 3, name: 'Ahmed', age: 18 },
    ],
  }
  deleteItem = (id) => {
    const newItems = this.state.items.filter((item) => {
      return item.id !== id
    })
    this.setState({
      items: newItems,
    })
  }
  addItem = (item) => {
    item.id = this.state.items.length
      ? this.state.items[this.state.items.length - 1].id + 1
      : 1

    this.setState({
      items: [...this.state.items, item],
    })
  }

  render() {
    console.log(this.state.items)
    return (
      <div className="App">
        <h1>ToDo List App</h1>
        <AddItems addItem={this.addItem} />
        <TodoItems items={this.state.items} deleteItems={this.deleteItem} />
      </div>
    )
  }
}

export default App
