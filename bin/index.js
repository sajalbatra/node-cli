#! /usr/bin/env node

import yargs from "yargs"
import { hideBin } from 'yargs/helpers'
const argv = yargs(hideBin(process.argv)).argv

if (argv.age >= 18) {
  console.log('Age is g8 18')
} else {
  console.log('Age is less than 18')
}
