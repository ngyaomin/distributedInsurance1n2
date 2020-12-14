import Web3 from 'web3';
require('dotenv').config();
const { infuraLink } = process.env;


let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  web3 = new Web3(window.web3.currentProvider);
  ethereum.enable();
} else {
  const provider = new Web3.providers.HttpProvider(
    infuraLink
  );
  web3 = new Web3(provider);
}

export default web3;
