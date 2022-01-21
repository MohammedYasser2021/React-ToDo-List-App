import React from 'react'
import './todoItems.css'
export default function TodoItems(props) {
  const { items, deleteItems } = props
  let length = items.length
  const listItems = items.map((item) => {
    return (
      <div key={item.id} className="item">
        <span>{item.name}</span>
        <span>{item.age}</span>
        <span onClick={() => deleteItems(item.id)}>&times;</span>
      </div>
    )
  })

  const renderItems = length ? listItems : <p>No Items Here</p>

  return (
    <div className="todoList">
      <div className="item-head">
        <span>Name</span>
        <span>Age</span>
        <span>Delete</span>
      </div>
      {renderItems}
    </div>
  )
}
