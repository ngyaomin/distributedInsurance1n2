import React, { Component } from 'react';
import Layout from '../../components/Layout';
import InsurancePool from '../../ethereum/insurancePool';
import { Card, Grid, Button } from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import FundForm from '../../components/FundForm';
import { Link } from '../../routes';

class InsurancePoolShow extends Component {
  static async getInitialProps(props) {
    const insurancePool = InsurancePool(props.query.address);

    const detail = await insurancePool.methods.getDetail().call();

    return {
      address: props.query.address,
      minimumPremium: detail[0],
      balance: detail[1],
      claimsCount: detail[2],
      validatorsCount: detail[3],
      manager: detail[4]
    };
  }

  renderCards() {
    const {
      balance,
      manager,
      minimumPremium,
      claimsCount,
      validatorsCount
    } = this.props;

    const items = [
      {
        header: manager,
        meta: 'Address of manager',
        description: 'Manager create this pool and can create claims on behalf of',
        style: { overflowWrap: 'break-word' }
      },
      {
        header: minimumPremium,
        meta: 'Minimum Premium in weis',
        description: 'To be insured you must contribute at least this much wei, also to become validator'
      },
      {
        header: claimsCount,
        meta: 'Number of Claims',
        description: 'Number of claims so far on this insurance pools. Claims must be validated by validators'
      },
      {
        header: validatorsCount,
        meta: 'Number of validators',
        description: 'Number of ppl that funded this pool and can act as validators'
      },
      {
        header: web3.utils.fromWei(balance, 'ether'),
        meta: 'Insurance Pool Balance(ether)',
        description: 'How much fund this pool has left'
      }
    ];

    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <h3>Insurance Pool Show</h3>
        <Grid>
          <Grid.Row>
            <Grid.Column width={10}>
              {this.renderCards()}

            </Grid.Column>
            <Grid.Column width={6}>
              <FundForm address={this.props.address} />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Link route={`/insurancepools/${this.props.address}/claims`}>
                <a>
                  <Button primary>View Claims</Button>
                </a>
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Layout>
    );
  }
}

export default InsurancePoolShow;
