import web3 from './web3'; // we are getting the instance from web3.js not the constructor
import InsurancePoolFactory from  './build/InsurancePoolFactory.json';
require('dotenv').config();
const { deployedTo } = process.env;

const instance = new web3.eth.Contract(
  JSON.parse(InsurancePoolFactory.interface),
  '0x935A6A54cB1ff4E4fBA2E4fe3e6afce51138D155'
  //'0x78604DC95eF02E72D75AA3864794ad567918d397'
  //'0xe03F5B704DFb9876aa4e0DcB99D0bc8370fFf3EC' // something wrong, might not work
  //'0x82bF4BA376837189f6959872d7E0B62e3faC57dd' // this is my deloyed address replace this
  // with urs, else u will just be running my deployed contract :P
  // i have keep the previous contract address here so that u can referecne, or i can ref
);

export default instance;
