import React from 'react'
class List extends React.Component {
  constructor() {
    super()
    this.state = { items: ['Item 1', 'Item 2'] }
  }
  addMore = () => {
    const items = this.state.items
    items.unshift('Item ' + (items.length + 1))
    this.setState({ items })
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.items.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
        <button onClick={this.addMore}>Add more</button>
      </div>
    )
  }
}
export default List