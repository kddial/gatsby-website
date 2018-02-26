import React from 'react';
import SelectLanguage from './SelectLanguage';
import { css } from 'emotion';
import styled from 'react-emotion';

const BlueDiv = styled('div')`
  background-color: indianred;
  width: 100px;
  height: 100px;  
`;

const Header = props => (
  <div
    css={`
      background-color: lightpink;
    `}
  >
    <div>
      <div className={css`
        background-color: hotpink;
        width: 100px;
        height: 100px;
      `} />
      <BlueDiv />
      <SelectLanguage langs={props.langs} />
    </div>
  </div>
);

export default Header;
