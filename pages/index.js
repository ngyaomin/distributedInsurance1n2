import React, { Component } from 'react';
import factory from '../ethereum/factory';
import { Card, Button } from 'semantic-ui-react';
import Layout from '../components/Layout';
import { Link } from '../routes';

class InsurancePoolIndex extends Component {
  // creating a instance of class to get access to
  // static asign the function not to instance of the class but to class itself

  static async getInitialProps() {
    const insurancePools = await factory.methods.getDeployedInsurancePools().call();

    return { insurancePools: insurancePools };
  }

  renderInsurancePools() {
      const items = this.props.insurancePools.map(address => {
        return {
          header: address,
          description: (
            <div>
            <i class="hand point right outline icon"></i>
              <Link route={`/insurancepools/${address}`}>
                <a><b><mark>View Insurance Pool</mark></b></a>
              </Link>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <i class="ethereum icon"></i>
              <Link route={`https://rinkeby.etherscan.io/address/${address}`}>
                <a target="_blank">View in Ether Scan</a>
              </Link>
            </div>
        ),
          fluid: true
        };
      });

      return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <div>
          <h3>Open Insurance Pools</h3>

          <Link route="/insurancepools/new">
            <a>
              <Button
                floated="right"
                content= "Create InsurancePool"
                icon="add circle" // the icon name is in document, be exact
                primary
              />
            </a>
          </Link>

          {this.renderInsurancePools()}
        </div>
      </Layout>
    );
  }
}

export default InsurancePoolIndex
