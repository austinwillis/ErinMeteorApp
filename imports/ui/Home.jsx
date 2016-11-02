import React, { Component } from 'react';
import { Link } from 'react-router';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Message from './Message.jsx';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Message items={['Hello', 'First', 'Second', 'Third']}/>
      </div>
    );
  }

  displayMessage(message) {
    return (
      <div>{message}</div>
    )
  }
}
