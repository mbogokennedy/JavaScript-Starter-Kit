/* eslint-disable no-debugger */
/* eslint-disable import/extensions */
import logger from './buildScripts/logger';
import './public/css/bootstrap.css';

debugger;
logger('Server Started On development mode.');

// Needed for Hot Module Replacement
if (typeof (module.hot) !== 'undefined') {
  module.hot.accept(); // eslint-disable-line no-undef
}
