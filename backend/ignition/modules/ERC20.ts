// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const NAME = "MyToken";
const SYMBOL = "MTK";
const DECIMALS = 18;
const INITIAL_SUPPLY = 1;

const ERC20Module = buildModule("ERC20Module", (m) => {
  const name = m.getParameter("name", NAME);
  const symbol = m.getParameter("symbol", SYMBOL);
  const decimals = m.getParameter("decimals", DECIMALS);
  const initialSupply = m.getParameter("initialSupply", INITIAL_SUPPLY);

  const erc20 = m.contract("ERC20", [name, symbol, decimals, initialSupply]);

  return { erc20 };
});

export default ERC20Module;
