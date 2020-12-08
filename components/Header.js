import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';


//export default () => {
export default class ThisComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      copySuccess: false
    }
  }

  copyCodeToClipboard = () => {
    const el = this.textArea
    el.select()
    document.execCommand("copy")
    this.setState({copySuccess: true})
  }

  render() {
  return (
    <Menu style={{ marginTop: '10px' }}>
      <Link route="https://ethereum.org/en/">
        <a className="item" target="_blank">
          <i class="ethereum icon"></i>
          </a>
      </Link>
      <Link route="/">
        <a className="item">
          <img src="https://icon-icons.com/icons2/1873/PNG/32/dibujo-34_119874.png"></img>
        </a>
      </Link>
      <Link route="/">
        <a className="item">
          <b>Safety Pin</b>, a Decentralize Peace Of Mind Platform
        </a>
      </Link>
      <button className="item" onClick={() => this.copyCodeToClipboard()}>
        <b>Donate Eths to >>> Click here to Copy</b>
      </button>
      <div className="item">
        <textarea
        ref={(textarea) => this.textArea = textarea}
        value="0xa85A05887Ae1f8f4Ce2Ce102c20d4aAFD1273981"
        />
      </div>
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
}
