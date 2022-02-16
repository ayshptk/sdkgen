#! /usr/bin/env node

"use strict";
import inquirer from "inquirer";
import { handler } from "./handler";
import path from "path";
import chalk from "chalk";
import fs from "fs";
var generate = require("project-name-generator");

console.clear();
let keys: any = {};
try {
  keys = require(path.resolve(__dirname, "sdkgen_keys.json"));
} catch (e) {
  console.log(chalk.yellow("SDK keys not found.Creating blank config"));
  fs.writeFileSync(
    path.resolve(__dirname, "sdkgen_keys.json"),
    JSON.stringify(keys, null, 2)
  );
  process.exit(1);
}
inquirer
  .prompt([
    {
      type: "list",
      name: "chain",
      message: "which chain is the contract deployed on?",
      choices: ["mainnet"],
    },
    {
      type: "input",
      name: "contract",
      message: "contract address?",
      default: "0xdac17f958d2ee523a2206206994597c13d831ec7",
    },
    {
      type: "input",
      name: "name",
      message: "Name of the SDK?",
      default: generate().dashed,
    },
  ])
  .then(async (answers) => {
    await handler(answers, keys);
  });
