import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Link } from 'react-router';
import { Messages } from '../api/messages.js';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Message from './Message.jsx';

class Home extends Component {
  constructor(props) {
    super(props);
    let _this = this;
  }

  renderMessages() {
    return (
      <Message items={['I love you...'].concat(this.props.messages.map((message) => { return message.text }))} />
    );
  }

  render() {
    return (
      <div>
        {this.renderMessages()}
      </div>
    );
  }
}

Home.propTypes = {
 messages: PropTypes.array.isRequired,
};

export default createContainer(() => {
 return {
   messages: Messages.find({}).fetch(),
 };
}, Home);
