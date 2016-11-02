import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Message extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentItem: 0,
      dir: 1
    }
  }

  componentDidMount() {
    let _this = this;
    this.updateInterval = setInterval(function() {
      let currentItem = _this.state.currentItem < _this.props.items.length-1 ? _this.state.currentItem + 1 : 1;
      let dir = _this.state.dir === 1 ? -1 : 1;
      _this.setState({currentItem, dir});
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.updateInterval);
  }

  renderItem(item) {
    const classes = `slide slide-${this.state.currentItem + 1} ${this.state.dir > 0 ? 'slide-next' : 'slide-back'}`;
    return (
        <div key={item} className={classes}><p>{item}</p></div>
      );
  }

  render() {
    const classes = `slide-container`;
    return (
      <div>
      <ReactCSSTransitionGroup transitionName="slide"
      transitionEnterTimeout={600}
      transitionLeaveTimeout={600}
      className={classes}>
        {this.renderItem(this.props.items[this.state.currentItem])}
      </ReactCSSTransitionGroup>
      </div>
    )
  }
}
