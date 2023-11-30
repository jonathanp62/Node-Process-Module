/**
 * (#)child-process.mjs 1.0.0   09/15/2023
 *
 * Copyright (c) Jonathan M. Parker
 * All Rights Reserved.
 * 
 * @author    Jonathan Parker
 * @version   1.0.0
 * @since     1.0.0
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
