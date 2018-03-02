import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion'
import styled from 'react-emotion';
import colors from '../../utils/colors';
import { FormattedMessage } from 'react-intl';
import MediaHelper from '../../utils/media';

const SectionOneDiv = styled.div`
  background-color: #15454C;
  color: ${colors.font.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 50px 0;
  font-size: 18px;
`;

const ButtonA = styled.a`
  background-color: ${colors.turquoise.vibrant};
  color: ${colors.font.midnightBlue};
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  font-size: 14px;
`;

const IconStyles = css`
  margin-right: 15px;
`;

const HeaderH1 = styled.h1`
  font-size: 50px;
  letter-spacing: 4px;
`;

const SectionOneDesktop = props => (
 <div>
   qq
 </div>
);


const SectionOne = (props, context) => {
  const messages = context.messages || {};
  const {
    s1_buttonOneUrl = '',
    s1_buttonTwoUrl = '',
  } = messages;

  return (
    <SectionOneDiv>
      <HeaderH1>
        <FormattedMessage id="s1_header"/>
      </HeaderH1>
      <p>
        <FormattedMessage id="s1_description"/>
      </p>

      <div>
        <ButtonA href={s1_buttonOneUrl} target="_blank">
          <i className={`fab fa-telegram ${IconStyles}`}></i>
          <FormattedMessage id="s1_buttonOne"/>
        </ButtonA>

        <ButtonA href={s1_buttonTwoUrl} target="_blank">
          <i className={`fas fa-file-alt ${IconStyles}`}></i>
          <FormattedMessage id="s1_buttonTwo"/>
        </ButtonA>
      </div>

      <MediaHelper mobile="mobile" desktop="desktop"/>


      <div className="container-fluid">
        <div className="row">
          <div className="col-xs">One of three columns</div>
          <div className="col-xs">One of three columns</div>
          <div className="col-xs">One of three columns</div>
        </div>
      </div>
    </SectionOneDiv>
  )
};

// Mandatory when reading messages from provider
SectionOne.contextTypes = {
  messages: PropTypes.object,
};


export default SectionOne;
