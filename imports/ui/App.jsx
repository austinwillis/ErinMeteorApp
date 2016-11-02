import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

import Home from './Home.jsx';
import Edit from './Edit.jsx';

export default class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Home} />
        <Route path="edit" component={Edit} />
      </Router>
    )
  }
}
