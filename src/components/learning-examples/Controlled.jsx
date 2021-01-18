import React from 'react'
const SideNav = props => {
  return (
    <aside>
      <label>categories</label>
      {props.categories.map(category => (
        <div
          key={category}
          onClick={_ => props.onSelect(category)}
        >
          <a
            aria-current={
              category === props.selected
                ? 'category'
                : null
            }
          >
            {category}
          </a>
        </div>
      ))}
    </aside>
  )
}
class Controlled extends React.Component {
  constructor() {
    super()
    this.state = {
      categories: ['cats', 'dogs', 'birds'],
      selected: null
    }
  }
  onSubmit = event => {
    event.preventDefault()
    const oldName = this.state.selected
    const newName = document.querySelector('input').value
    let { categories } = this.state
    categories[categories.indexOf(oldName)] = newName
    this.setState({ categories, selected: newName })
  }
  onSelect = category => {
    this.setState({ selected: category })
  }
  render() {
    return (
      <div>
        <SideNav
          categories={this.state.categories}
          selected={this.state.selected}
          onSelect={this.onSelect}
        />
        <main>
          {this.state.selected ? (
            <Form
              onSubmit={this.onSubmit}
              selected={this.state.selected}
            />
          ) : null}
        </main>
      </div>
    )
  }
}
const Form = props => {
  return (
    <form onSubmit={props.onSubmit}>
      <div>Rename {props.selected} to:</div>
      <input defaultValue={props.selected} type="text" autoFocus />
      <button>Save</button>
    </form>
  )
}
export default Controlled