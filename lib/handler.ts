import path from "path";
import { exec } from "child_process";
import inquirer from "inquirer";
import chalk from "chalk";
import fs from "fs";
import fetch from "node-fetch";

function overwriteKeys(keys: any) {
  fs.writeFileSync(
    path.resolve(__dirname, "sdkgen_keys.json"),
    JSON.stringify(keys, null, 2)
  );
}

export async function handler(answers: any, keys: any) {
  if (keys.etherscanApi === undefined || keys.etherscanApi === "") {
    await inquirer
      .prompt([
        {
          type: "input",
          name: "etherscanApi",
          message: "etherscan api key?",
        },
      ])
      .then(async (answers) => {
        keys.etherscanApi = answers.etherscanApi;
        overwriteKeys(keys);
      });
  }
  if (keys.token === undefined || keys.token === "") {
    await inquirer
      .prompt([
        {
          type: "input",
          name: "token",
          message: "access token? (dm @ayshptk to get one for free)",
        },
      ])
      .then(async (answers) => {
        keys.token = answers.token;
        overwriteKeys(keys);
        await handler(answers, keys);
      });
  }
  const { name, contract, chain } = answers;
  console.log(chalk.gray("SDK Name: "), chalk.green(name));
  console.log(chalk.gray("Chain: "), chalk.green(chain));
  console.log(chalk.gray("Contract address: "), chalk.green(contract));
  console.log(
    chalk.gray("Etherscan API key: "),
    chalk.green(keys["etherscanApi"])
  );
  console.log(chalk.gray("Access token: "), chalk.green(keys["token"]));

  inquirer
    .prompt([
      {
        type: "confirm",
        name: "confirm",
        message: "Does this look correct?",
        default: true,
      },
    ])
    .then(async (answers) => {
      if (answers.confirm) {
        console.clear();
        console.log(chalk.gray("Setting up..."));
        const response = await fetch(
          "https://sdkgenapi-beta.ayushdot.net/generate",

          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              key: keys["token"],
              etherscan: keys["etherscanApi"],
            },
            body: JSON.stringify({
              name,
              address: contract,
              chain,
            }),
          }
        ).then((res) => {
          return res.json();
        });
        if (response.error) {
          console.log(chalk.red(response.error));
          return;
        }
        const { files } = response;
        Object.keys(files).forEach(async (f) => {
          fs.mkdirSync(path.resolve("sdk"));
          fs.mkdirSync(path.resolve("sdk/src"));
          await write(f, files[f]);
        });
        exec(
          `cd sdk && ${response.install}`,
          (error: any, stdout: any, stderr: any) => {
            if (error) {
              console.log(chalk.red(error));
              return;
            }
            if (stderr) {
              console.log(chalk.red(` ${stderr}`));
              return;
            }
            console.log(chalk.gray(`${stdout}`));
          }
        );
      } else {
        console.log(chalk.red("Operation cancelled by user"));
      }
    });
}

async function write(file: string, data: string) {
  await fs.writeFileSync(path.resolve("./", "sdk", file), data);
}
