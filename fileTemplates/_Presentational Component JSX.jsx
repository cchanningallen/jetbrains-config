import './${NAME}.scss';

import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import cxHelpers from 'util/className'; 

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