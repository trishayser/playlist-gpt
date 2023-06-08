#!/usr/bin/env node

import { Command } from 'commander';
import figlet from 'figlet';
import { getPlaylistFakeObject } from './gpt';

const program = new Command();

console.log(figlet.textSync("Playlist GPT"));

// program
//   .option('-p, --prompt <value>', 'Specify a prompt')
//   .parse(process.argv);

const optionValue = program.opts();

// Your code here...

let playlistObject = getPlaylistFakeObject(optionValue.asString())


console.log('Hello, world!');
