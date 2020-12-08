# DCInsurance1n2
//SPDX-License-Identifier: UNLICENSED
  use truffle 4. truffle 5 and above have too many conflict issues.
  run npm install.
  do not run npm audit and or audit fix. this will create more issues.
  replace your own infura and meta mask memonomics with walletDetails, infuraLink in deploy.js and web3.js file.
  enter ethereum file, run compile.js and deploy.js to deploy json smart contract file base on your own infura and metamask creditial above.
  you need only deploy once, unless u made changes to the smart contracts.
  go back to root folder, run npm run dev.
  the app should be ready on localhost 3000.
  you can choose to deploy to web and main net if you choose to do so.
  to initiate or create an insurance pool, you will need to have metamask log in, as manager have certain authority in the system, some authentication is needed.
