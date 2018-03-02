import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';

class MessagesProvider extends Component {
  getChildContext() {
    const { messages } = this.props;
    return { messages };
  }

  render() {
    // `Children.only` enables us not to add a <div /> for nothing
    return Children.only(this.props.children);
  }
}

// Mandatory to specify the Provider's contextTypes
MessagesProvider.childContextTypes = {
  messages: PropTypes.object.isRequired,
};

export default MessagesProvider;
