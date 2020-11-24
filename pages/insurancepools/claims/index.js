import React, { Component } from 'react';
import Layout from '../../../components/Layout';
import { Button } from 'semantic-ui-react';
import { Link } from '../../../routes';

class ClaimIndex extends Component {
  static async getInitialProps(props) {
    const { address } = props.query;
    return  { address };
  }

  render() {
    return (
      <Layout>
        <h3>Claims List</h3>
        <Link route={`/insurancepools/${this.props.address}/claims/new`}>
          <a>
            <Button primary>Add Claim</Button>
          </a>
        </Link>
      </Layout>
    );
  }
}

export default ClaimIndex;
