const { Contract, ethers } = require('ethers');
const tokenAddress = 0xdac17f958d2ee523a2206206994597c13d831ec7;


function contract(provider) {
this.provider = provider;
this.contract = new Contract(tokenAddress, [{'constant': True, 'inputs': [], 'name': 'name', 'outputs': [{'name': '', 'type': 'string'}], 'payable': False, 'stateMutability': 'view', 'type': 'function'}, {'constant': False, 'inputs': [{'name': '_upgradedAddress', 'type': 'address'}], 'name': 'deprecate', 'outputs': [], 'payable': False, 'stateMutability': 'nonpayable', 'type': 'function'}, {'constant': False, 'inputs': [{'name': '_spender', 'type': 'address'}, {'name': '_value', 'type': 'uint256'}], 'name': 'approve', 'outputs': [], 'payable': False, 'stateMutability': 'nonpayable', 'type': 'function'}, {'constant': True, 'inputs': [], 'name': 'deprecated', 'outputs': [{'name': '', 'type': 'bool'}], 'payable': False, 'stateMutability': 'view', 'type': 'function'}, {'constant': False, 'inputs': [{'name': '_evilUser', 'type': 'address'}], 'name': 'addBlackList', 'outputs': [], 'payable': False, 'stateMutability': 'nonpayable', 'type': 'function'}, {'constant': True, 'inputs': [], 'name': 'totalSupply', 'outputs': [{'name': '', 'type': 'uint256'}], 'payable': False, 'stateMutability': 'view', 'type': 'function'}, {'constant': False, 'inputs': [{'name': '_from', 'type': 'address'}, {'name': '_to', 'type': 'address'}, {'name': '_value', 'type': 'uint256'}], 'name': 'transferFrom', 'outputs': [], 'payable': False, 'stateMutability': 'nonpayable', 'type': 'function'}, {'constant': True, 'inputs': [], 'name': 'upgradedAddress', 'outputs': [{'name': '', 'type': 'address'}], 'payable': False, 'stateMutability': 'view', 'type': 'function'}, {'constant': True, 'inputs': [{'name': '', 'type': 'address'}], 'name': 'balances', 'outputs': [{'name': '', 'type': 'uint256'}], 'payable': False, 'stateMutability': 'view', 'type': 'function'}, {'constant': True, 'inputs': [], 'name': 'decimals', 'outputs': [{'name': '', 'type': 'uint256'}], 'payable': False, 'stateMutability': 'view', 'type': 'function'}, {'constant': True, 'inputs': [], 'name': 'maximumFee', 'outputs': [{'name': '', 'type': 'uint256'}], 'payable': False, 'stateMutability': 'view', 'type': 'function'}, {'constant': True, 'inputs': [], 'name': '_totalSupply', 'outputs': [{'name': '', 'type': 'uint256'}], 'payable': False, 'stateMutability': 'view', 'type': 'function'}, {'constant': False, 'inputs': [], 'name': 'unpause', 'outputs': [], 'payable': False, 'stateMutability': 'nonpayable', 'type': 'function'}, {'constant': True, 'inputs': [{'name': '_maker', 'type': 'address'}], 'name': 'getBlackListStatus', 'outputs': [{'name': '', 'type': 'bool'}], 'payable': False, 'stateMutability': 'view', 'type': 'function'}, {'constant': True, 'inputs': [{'name': '', 'type': 'address'}, {'name': '', 'type': 'address'}], 'name': 'allowed', 'outputs': [{'name': '', 'type': 'uint256'}], 'payable': False, 'stateMutability': 'view', 'type': 'function'}, {'constant': True, 'inputs': [], 'name': 'paused', 'outputs': [{'name': '', 'type': 'bool'}], 'payable': False, 'stateMutability': 'view', 'type': 'function'}, {'constant': True, 'inputs': [{'name': 'who', 'type': 'address'}], 'name': 'balanceOf', 'outputs': [{'name': '', 'type': 'uint256'}], 'payable': False, 'stateMutability': 'view', 'type': 'function'}, {'constant': False, 'inputs': [], 'name': 'pause', 'outputs': [], 'payable': False, 'stateMutability': 'nonpayable', 'type': 'function'}, {'constant': True, 'inputs': [], 'name': 'getOwner', 'outputs': [{'name': '', 'type': 'address'}], 'payable': False, 'stateMutability': 'view', 'type': 'function'}, {'constant': True, 'inputs': [], 'name': 'owner', 'outputs': [{'name': '', 'type': 'address'}], 'payable': False, 'stateMutability': 'view', 'type': 'function'}, {'constant': True, 'inputs': [], 'name': 'symbol', 'outputs': [{'name': '', 'type': 'string'}], 'payable': False, 'stateMutability': 'view', 'type': 'function'}, {'constant': False, 'inputs': [{'name': '_to', 'type': 'address'}, {'name': '_value', 'type': 'uint256'}], 'name': 'transfer', 'outputs': [], 'payable': False, 'stateMutability': 'nonpayable', 'type': 'function'}, {'constant': False, 'inputs': [{'name': 'newBasisPoints', 'type': 'uint256'}, {'name': 'newMaxFee', 'type': 'uint256'}], 'name': 'setParams', 'outputs': [], 'payable': False, 'stateMutability': 'nonpayable', 'type': 'function'}, {'constant': False, 'inputs': [{'name': 'amount', 'type': 'uint256'}], 'name': 'issue', 'outputs': [], 'payable': False, 'stateMutability': 'nonpayable', 'type': 'function'}, {'constant': False, 'inputs': [{'name': 'amount', 'type': 'uint256'}], 'name': 'redeem', 'outputs': [], 'payable': False, 'stateMutability': 'nonpayable', 'type': 'function'}, {'constant': True, 'inputs': [{'name': '_owner', 'type': 'address'}, {'name': '_spender', 'type': 'address'}], 'name': 'allowance', 'outputs': [{'name': 'remaining', 'type': 'uint256'}], 'payable': False, 'stateMutability': 'view', 'type': 'function'}, {'constant': True, 'inputs': [], 'name': 'basisPointsRate', 'outputs': [{'name': '', 'type': 'uint256'}], 'payable': False, 'stateMutability': 'view', 'type': 'function'}, {'constant': True, 'inputs': [{'name': '', 'type': 'address'}], 'name': 'isBlackListed', 'outputs': [{'name': '', 'type': 'bool'}], 'payable': False, 'stateMutability': 'view', 'type': 'function'}, {'constant': False, 'inputs': [{'name': '_clearedUser', 'type': 'address'}], 'name': 'removeBlackList', 'outputs': [], 'payable': False, 'stateMutability': 'nonpayable', 'type': 'function'}, {'constant': True, 'inputs': [], 'name': 'MAX_UINT', 'outputs': [{'name': '', 'type': 'uint256'}], 'payable': False, 'stateMutability': 'view', 'type': 'function'}, {'constant': False, 'inputs': [{'name': 'newOwner', 'type': 'address'}], 'name': 'transferOwnership', 'outputs': [], 'payable': False, 'stateMutability': 'nonpayable', 'type': 'function'}, {'constant': False, 'inputs': [{'name': '_blackListedUser', 'type': 'address'}], 'name': 'destroyBlackFunds', 'outputs': [], 'payable': False, 'stateMutability': 'nonpayable', 'type': 'function'}, {'inputs': [{'name': '_initialSupply', 'type': 'uint256'}, {'name': '_name', 'type': 'string'}, {'name': '_symbol', 'type': 'string'}, {'name': '_decimals', 'type': 'uint256'}], 'payable': False, 'stateMutability': 'nonpayable', 'type': 'constructor'}, {'anonymous': False, 'inputs': [{'indexed': False, 'name': 'amount', 'type': 'uint256'}], 'name': 'Issue', 'type': 'event'}, {'anonymous': False, 'inputs': [{'indexed': False, 'name': 'amount', 'type': 'uint256'}], 'name': 'Redeem', 'type': 'event'}, {'anonymous': False, 'inputs': [{'indexed': False, 'name': 'newAddress', 'type': 'address'}], 'name': 'Deprecate', 'type': 'event'}, {'anonymous': False, 'inputs': [{'indexed': False, 'name': 'feeBasisPoints', 'type': 'uint256'}, {'indexed': False, 'name': 'maxFee', 'type': 'uint256'}], 'name': 'Params', 'type': 'event'}, {'anonymous': False, 'inputs': [{'indexed': False, 'name': '_blackListedUser', 'type': 'address'}, {'indexed': False, 'name': '_balance', 'type': 'uint256'}], 'name': 'DestroyedBlackFunds', 'type': 'event'}, {'anonymous': False, 'inputs': [{'indexed': False, 'name': '_user', 'type': 'address'}], 'name': 'AddedBlackList', 'type': 'event'}, {'anonymous': False, 'inputs': [{'indexed': False, 'name': '_user', 'type': 'address'}], 'name': 'RemovedBlackList', 'type': 'event'}, {'anonymous': False, 'inputs': [{'indexed': True, 'name': 'owner', 'type': 'address'}, {'indexed': True, 'name': 'spender', 'type': 'address'}, {'indexed': False, 'name': 'value', 'type': 'uint256'}], 'name': 'Approval', 'type': 'event'}, {'anonymous': False, 'inputs': [{'indexed': True, 'name': 'from', 'type': 'address'}, {'indexed': True, 'name': 'to', 'type': 'address'}, {'indexed': False, 'name': 'value', 'type': 'uint256'}], 'name': 'Transfer', 'type': 'event'}, {'anonymous': False, 'inputs': [], 'name': 'Pause', 'type': 'event'}, {'anonymous': False, 'inputs': [], 'name': 'Unpause', 'type': 'event'}], provider);
  this.name = async function() {
    return await this.contract.name();
  };

  this.deprecate = async function(upgradedAddress) {
    tx = await this.contract.deprecate(upgradedAddress);
    return await tx.wait()
  };

  this.approve = async function(spender, value) {
    tx = await this.contract.approve(spender, value);
    return await tx.wait()
  };

  this.deprecated = async function() {
    return await this.contract.deprecated();
  };

  this.addBlackList = async function(evilUser) {
    tx = await this.contract.addBlackList(evilUser);
    return await tx.wait()
  };

  this.totalSupply = async function() {
    return await this.contract.totalSupply();
  };

  this.transferFrom = async function(from, to, value) {
    tx = await this.contract.transferFrom(from, to, value);
    return await tx.wait()
  };

  this.upgradedAddress = async function() {
    return await this.contract.upgradedAddress();
  };

  this.balances = async function(address0) {
    return await this.contract.balances(address0);
  };

  this.decimals = async function() {
    return await this.contract.decimals();
  };

  this.maximumFee = async function() {
    return await this.contract.maximumFee();
  };

  this._totalSupply = async function() {
    return await this.contract._totalSupply();
  };

  this.unpause = async function() {
    tx = await this.contract.unpause();
    return await tx.wait()
  };

  this.getBlackListStatus = async function(maker) {
    return await this.contract.getBlackListStatus(maker);
  };

  this.allowed = async function(address0, address1) {
    return await this.contract.allowed(address0, address1);
  };

  this.paused = async function() {
    return await this.contract.paused();
  };

  this.balanceOf = async function(who) {
    return await this.contract.balanceOf(who);
  };

  this.pause = async function() {
    tx = await this.contract.pause();
    return await tx.wait()
  };

  this.getOwner = async function() {
    return await this.contract.getOwner();
  };

  this.owner = async function() {
    return await this.contract.owner();
  };

  this.symbol = async function() {
    return await this.contract.symbol();
  };

  this.transfer = async function(to, value) {
    tx = await this.contract.transfer(to, value);
    return await tx.wait()
  };

  this.setParams = async function(newBasisPoints, newMaxFee) {
    tx = await this.contract.setParams(newBasisPoints, newMaxFee);
    return await tx.wait()
  };

  this.issue = async function(amount) {
    tx = await this.contract.issue(amount);
    return await tx.wait()
  };

  this.redeem = async function(amount) {
    tx = await this.contract.redeem(amount);
    return await tx.wait()
  };

  this.allowance = async function(owner, spender) {
    return await this.contract.allowance(owner, spender);
  };

  this.basisPointsRate = async function() {
    return await this.contract.basisPointsRate();
  };

  this.isBlackListed = async function(address0) {
    return await this.contract.isBlackListed(address0);
  };

  this.removeBlackList = async function(clearedUser) {
    tx = await this.contract.removeBlackList(clearedUser);
    return await tx.wait()
  };

  this.MAX_UINT = async function() {
    return await this.contract.MAX_UINT();
  };

  this.transferOwnership = async function(newOwner) {
    tx = await this.contract.transferOwnership(newOwner);
    return await tx.wait()
  };

  this.destroyBlackFunds = async function(blackListedUser) {
    tx = await this.contract.destroyBlackFunds(blackListedUser);
    return await tx.wait()
  };
}

module.exports = contract;