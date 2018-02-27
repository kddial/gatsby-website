import React from 'react';
import SelectLanguage from './SelectLanguage';
import styled from 'react-emotion';
import colors from '../../utils/colors';

const NavigationDiv = styled.div`
  background-color: ${colors.background.grey};
  height: 70px;
  width: 100%;
`;

const Navigation = props => (
  <NavigationDiv>
    <SelectLanguage langs={props.langs} />
  </NavigationDiv>
);

export default Navigation;
