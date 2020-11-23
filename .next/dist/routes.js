'use strict';

var routes = require('next-routes')();

routes.add('/insurancepools/new', '/insurancepools/new').add('/insurancepools/:address', '/insurancepools/show').add('/insurancepools/:address/claims', '/insurancepools/claims/index');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQSxPQUNHLEFBREgsSUFDTyxBQURQLHVCQUM4QixBQUQ5Qix1QkFFRyxBQUZILElBRU8sQUFGUCw0QkFFbUMsQUFGbkMsd0JBR0csQUFISCxJQUdPLEFBSFAsbUNBRzBDLEFBSDFDOztBQUtBLE9BQU8sQUFBUCxVQUFpQixBQUFqQiIsImZpbGUiOiJyb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhb21pbi9kaXN0cmlidXRlZEluc3VyYW5jZSJ9