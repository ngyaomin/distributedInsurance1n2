import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
  return (
    <Menu style={{ marginTop: '10px' }}>
      <Link route="https://ethereum.org/en/">
        <a className="item" target="_blank">
          <i class="ethereum icon"></i>
          </a>
      </Link>
      <img class="item" src="https://icon-icons.com/icons2/1873/PNG/32/dibujo-34_119874.png"></img>
      <Link route="/">
        <a className="item">
          <b>Safety Pin</b>, a Decentralize Peace Of Mind Platform
        </a>
      </Link>
        <Menu.Menu position="right">
          <Link route="/">
            <a className="item">Insurance Pools</a>
          </Link>
          <Link route="/insurancepools/new">
            <a className="item">+</a>
          </Link>
        </Menu.Menu>
    </Menu>
  );
};
