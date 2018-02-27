import React from 'react';
import SelectLanguage from './SelectLanguage';
import styled from 'react-emotion';
import colors from '../../utils/colors';

const NavigationDiv = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: ${colors.background.grey};
  width: 200px;
`;

const Navigation = props => (
  <NavigationDiv>
    <SelectLanguage langs={props.langs} />
  </NavigationDiv>
);

export default Navigation;
