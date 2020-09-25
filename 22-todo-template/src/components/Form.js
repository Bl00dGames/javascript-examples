import React, {Component} from 'react'

class Form extends Component {
  initialState = {
    todo: ''
  }

  state = this.initialState

  submitForm = () => {
    this.props.handleSubmit(this.state.todo)
    this.setState(this.initialState)
  }

  handleChange = (event) => {
    this.setState({
      todo: event.target.value
    })
  }

  render() {
    const { todo } = this.state

    return (
      <form>
        <input
          type="text"
          name="todo"
          value={todo}
          onChange={this.handleChange}
        />

        <input type="button" value="Hinzufügen" onClick={this.submitForm} />
      </form>
    )
  }
}
export default Form