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

const ButtonDiv = styled.div`
  background-color: ${colors.turquoise.vibrant};
  color: ${colors.font.midnightBlue};
  border-radius: 5px;
  padding: 14px 10px;
  margin: 5px;
  font-size: 14px;
  min-width: 250px;
`;

const MobileButtonDiv = styled(ButtonDiv)``;

const IconStyles = css`
  margin-right: 15px;
`;

const HeaderH1 = styled.h1`
  font-size: 50px;
  letter-spacing: 4px;
`;

const SectionOneDesktop = (props, context) => {
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

      <div className="row">
        <div className="col">
          <a href={s1_buttonOneUrl} target="_blank">
            <ButtonDiv>
              <i className={`fab fa-telegram ${IconStyles}`}></i>
              <FormattedMessage id="s1_buttonOne"/>
            </ButtonDiv>
          </a>
        </div>

        <div className="col">
          <a href={s1_buttonTwoUrl} target="_blank">
            <ButtonDiv>
              <i className={`fas fa-file-alt ${IconStyles}`}></i>
              <FormattedMessage id="s1_buttonTwo"/>
            </ButtonDiv>
          </a>
        </div>
      </div>

    </SectionOneDiv>
  )
};


const SectionOneMobile = (props, context) => {
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

      <div className="row" css="width: 100%;">
        <div className="col">
          <a href={s1_buttonOneUrl} target="_blank">
            <MobileButtonDiv>
              <i className={`fab fa-telegram ${IconStyles}`}></i>
              <FormattedMessage id="s1_buttonOne"/>
            </MobileButtonDiv>
          </a>
        </div>
      </div>

      <div className="row" css="width: 100%;">
        <div className="col">
          <a href={s1_buttonTwoUrl} target="_blank">
            <MobileButtonDiv>
              <i className={`fas fa-file-alt ${IconStyles}`}></i>
              <FormattedMessage id="s1_buttonTwo"/>
            </MobileButtonDiv>
          </a>
        </div>
      </div>

    </SectionOneDiv>
  )
};


const SectionOne = (props) => {
  return (
    <MediaHelper
      mobile={<SectionOneMobile />}
      desktop={<SectionOneDesktop />} />
  )
};

// Mandatory when reading messages from provider
SectionOneDesktop.contextTypes = {
  messages: PropTypes.object,
};
SectionOneMobile.contextTypes = {
  messages: PropTypes.object,
};


export default SectionOne;
