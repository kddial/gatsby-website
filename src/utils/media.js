import React, { Component } from 'react';
import { css } from 'react-emotion';
import Media from 'react-media';

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
      {matches => matches ? (<div>{mobile}</div>) : (<div>{desktop}</div>)}
    </Media>
  )
};

export default MediaHelper;
