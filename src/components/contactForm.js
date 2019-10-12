import React from "react"

export default class ContactForm extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    _replyto: "",
    message: "",
  }
  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }

  /*handleSubmit = event => {
    event.preventDefault()
    alert(`Welcome ${this.state.firstName}`)
  }*/
  render() {
    return (
      <form
        //onSubmit={this.handleSubmit}
        name="contact"
        method="post"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact" />

        <label>
          First name
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Last name
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="_replyto"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Message
          <textarea
            name="message"
            value={this.state.message}
            onChange={this.handleInputChange}
          />
        </label>
        <button type="submit">Send message</button>
      </form>
    )
  }
}
