import React from 'react'
const Form = props => {
  return (
    <form>
      <label>Your profile</label>
      {props.mode === 'edit' ? (
        <React.Fragment>
          <input
            type="text"
            autoFocus
            placeholder="Enter new username"
            defaultValue="sid"
          />
          <button onClick={props.save}>Save</button>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div>username: sid</div>
          <button onClick={props.edit}>Edit</button>
        </React.Fragment>
      )}
    </form>
  )
}
class Spaghetti extends React.Component {
  state = { mode: 'view' }
  toggle = event => {
    event.preventDefault()
    if (this.state.mode === 'view')
      this.setState({ mode: 'edit' })
    else this.setState({ mode: 'view' })
  }
  render() {
    return (
      <Form
        mode={this.state.mode}
        edit={this.toggle}
        save={this.toggle}
      />
    )
  }
}
export default Spaghetti