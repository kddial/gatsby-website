import React from 'react';
import SelectLanguage from './SelectLanguage';
import styled from 'react-emotion';
import colors from '../../utils/colors';

const HeaderDiv = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: ${colors.background.grey};
`;

const Header = props => (
  <HeaderDiv>
    <SelectLanguage langs={props.langs} />
  </HeaderDiv>
);

export default Header;
