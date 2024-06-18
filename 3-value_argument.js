#!/usr/bin/node
/* script that prints the first argument passed to it */

const args = process.argv;

if (args[2] === undefined) {
  console.log('No arguments');
} else {
  console.log(args);
}
