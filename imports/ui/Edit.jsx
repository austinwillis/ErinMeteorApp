import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import Messages from '../api/messages.js';

export default class Edit extends Component {
  handleSubmit(event) {
    event.preventDefault();

    // Find the text field via the React ref
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

    Messages.insert({
      text
    });

    // Clear form
    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }

  render() {
    return (
      <div className="container">
      <header>
        <h2>Add Message</h2>
        <Link to="/">Back</Link>

        <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
          <input
            type="text"
            ref="textInput"
            placeholder="Type to add new messages"
          />
        </form>
      </header>
      </div>
    )
  }
}
