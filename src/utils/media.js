import React, { Component } from 'react';
import { css } from 'react-emotion';
import Media from 'react-media';





class Mobile extends Component {
  componentWillMount() {
    console.log("mobile mounted");
  }
  componentWillUnmount() {
    console.log("mobile unmounted");
  }
  render() {
    return (
      <div>
        { this.props.children }
      </div>
    ) ;
  }
}




class Desktop extends Component {
  componentWillMount() {
    console.log("desktop mounted");
  }
  componentWillUnmount() {
    console.log("desktop unmounted");
  }
  render() {
    return (
      <div>
        { this.props.children }
      </div>
    ) ;
  }
}

// min widths on each breakpoints from bootstrap
// src: https://getbootstrap.com/docs/4.0/layout/overview/
export const breakpoints = {
  small: 0, // mobile
  medium: 768, // mobile tablet
  large: 992, // desktop
};

const MediaHelper = ({ mobile, desktop }) => {
  return (
    <Media query={{ maxWidth: (breakpoints.large - 1) }}>
      {matches => matches ? (<Mobile>{mobile}</Mobile>) : (<Desktop>{desktop}</Desktop>)}
    </Media>
  )
};

export default MediaHelper;
