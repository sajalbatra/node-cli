#!/usr/bin/env node

import yargs from "yargs";
import { hideBin } from 'yargs/helpers';
import chalk from 'chalk';
import boxen from 'boxen';
import figlet from "figlet"


figlet.text(
    "Tran!",
    {
      font: "Ghost",
      horizontalLayout: "full",
      verticalLayout: "default",
      width: 80,
      whitespaceBreak: true,
    },
    function (err, data) {
      if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
      }
      console.log(data);
    }
  );

const usage = chalk.magenta(
    "\nUsage: mycli -l <language> -s <sentence>\n" +
    boxen(
        chalk.green("\nTranslates a sentence to a specific language\n"), 
        { padding: 1, borderColor: 'green', dimBorder: true }
    ) + "\n"
);

// Configure yargs options
const options = yargs(hideBin(process.argv))
    .usage(usage)
    .option("l", {
        alias: "language",
        describe: "Translate to language",
        type: "string",
        demandOption: false,
    })
    .option("s", {
        alias: "sentence",
        describe: "Sentence to be translated",
        type: "string",
        demandOption: false,
    })
    .help("h")
    .alias("h", "help")
    .argv;

// Example usage of the provided options
if (options.name === "sajal") {
    console.log("Hello sajal");
}
