import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';

export default class ThisComponent extends Component {
    render() {
      return (
        <div id="footer">
        <Menu style={{ marginTop: '200px' }}>
            <Menu.Menu position="right">
              <Link route="https://github.com/ngyaomin/distributedInsurance1n2">
                <a className="item" target="_blank">
                  <i class="github icon"></i>
                  GitHub Depository for this project
                </a>
              </Link>
            </Menu.Menu>
            
        </Menu>
        </div>
      );
  };
}
