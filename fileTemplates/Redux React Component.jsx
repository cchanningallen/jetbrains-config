import './${NAME}.scss';

import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import cxHelpers from 'util/className'; 

@connect(
  (state, props) => ({}),
  {},
)
@cxHelpers('${NAME}')
export default class ${NAME} extends PureComponent {
  static propTypes = {

  };
  
  render() {
    return (
      <div className={this.cx()}>
      
      </div>
    );
  }
}