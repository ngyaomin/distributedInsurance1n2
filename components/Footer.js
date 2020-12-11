import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';

var style = {
    borderTop: "1px solid #E7E7E7",
    padding: "0px",
    position: "fixed",
    left: "0",
    bottom: "35px",
    height: "0px",
    width: "100%"
}

export default class ThisComponent extends Component {
    render() {
      return (
        <div style={style}>
        <Menu>
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
