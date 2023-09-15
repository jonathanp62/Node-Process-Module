/**
 * (#)child-process.mjs 1.0.0   09/15/2023
 *
 * Copyright (c) Jonathan M. Parker
 * 324 Lantana Drive
 * Owings Mills, MD  21117 U.S.A
 * All Rights Reserved.
 */

process.on('message', (msg) => {
    console.log(`From parent process: ${msg}`);
})

process.send('Hi from the child process');

delay(3000).then(() => {
    process.exit(0);
});

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
