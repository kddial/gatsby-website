import React from 'react'
import Link from 'gatsby-link'
import SelectLanguage from './SelectLanguage';
// import { css } from ''

const Header = (props) => (
  <div
    css={`
      background-color: lightpink;
    `}>
    <div>
      <h1>
        <Link to="/">
        </Link>
      </h1>
      <SelectLanguage langs={props.langs} />
    </div>
  </div>
)

export default Header;
