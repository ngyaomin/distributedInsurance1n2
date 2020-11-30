import web3 from './web3'; // we are getting the instance from web3.js not the constructor
import InsurancePoolFactory from  './build/InsurancePoolFactory.json';
require('dotenv').config();
const { deployedTo } = process.env;

const instance = new web3.eth.Contract(
  JSON.parse(InsurancePoolFactory.interface),
  '0xe03F5B704DFb9876aa4e0DcB99D0bc8370fFf3EC' // something wrong, might not work
  //'0x82bF4BA376837189f6959872d7E0B62e3faC57dd' // this is my deloyed address replace this
  // with urs, else u will just be running my deployed contract :P
);

export default instance;
