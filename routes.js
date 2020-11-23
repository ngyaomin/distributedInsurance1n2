const routes = require('next-routes')();

routes
  .add('/insurancepools/new', '/insurancepools/new')
  .add('/insurancepools/:address', '/insurancepools/show')
  .add('/insurancepools/:address/claims', '/insurancepools/claims/index');

module.exports = routes;
