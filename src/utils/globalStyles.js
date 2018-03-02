import { injectGlobal } from 'react-emotion';
import normalize from 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';

injectGlobal`
  * {
      font-family: 'Montserrat', -apple-system, BlinkMacSystemFont,
             'avenir next', avenir,
             'helvetica neue', helvetica,
             ubuntu,
             roboto, noto,
             'segoe ui', arial,
             sans-serif;
      box-sizing: border-box;
      
      -webkit-text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
  };
  a {
    text-decoration: none;
    color: inherit;
  };
  a:hover {
    cursor: pointer;
  };
  
  ::selection {
    background: #02dcbd; /* WebKit/Blink Browsers */
  }

  ::-moz-selection {
    background: #02dcbd; /* Gecko Browsers */
  }
`;