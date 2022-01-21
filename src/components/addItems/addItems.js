import React, { Component } from 'react'
import './addItems.css'
export default class AddItems extends Component {
  state = {
    name: '',
    age: '',
  }
  handleChange = (e) => {
    if (e.target.value !== '') {
      this.setState({
        [e.target.id]: e.target.value,
      })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()

    if (this.state.name !== '' && this.state.age !== '' && this.state.age > 0) {
      this.props.addItem(this.state)
    }
    this.setState({
      name: '',
      age: '',
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter Your Name"
            id="name"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <input
            type="number"
            placeholder="Add Your Age"
            id="age"
            onChange={this.handleChange}
            value={this.state.age}
          />
          <input type="submit" value="Add" />
        </form>
      </div>
    )
  }
}
