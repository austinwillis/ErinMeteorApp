import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import App from '../imports/ui/App.jsx';

import Home from '../imports/ui/Home.jsx';
Meteor.startup(() => {
  render(<App />, document.getElementById('target'));
});
