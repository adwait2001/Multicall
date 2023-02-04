import { MultiCall } from '@indexed-finance/multicall';
import { ethers } from 'ethers';

let provider = ethers.getDefaultProvider();
const multi = new MultiCall(provider);
const tokens = [
  '0x6b175474e89094c44da98b954eedeac495271d0f', // dai
  '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2', // weth
  '0x0000000000000000000000000000000000000000' // eth
];
const account = '0x0000000000000000000000000000000000000000';
const [blockNumber, balances] = await multi.getBalances(tokens, account);

const daiBalance = balances['0x6b175474e89094c44da98b954eedeac495271d0f'];
const wethBalance = balances['0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'];
const ethBalance = balances['0x0000000000000000000000000000000000000000'];

console.log(daiBalance.toString())
console.log(wethBalance.toString())
console.log(ethBalance.toString())