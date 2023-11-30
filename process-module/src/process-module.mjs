/**
 * (#)process-module.mjs    1.0.0   09/14/2023
 *
 * Copyright (c) Jonathan M. Parker
 * All Rights Reserved.
 * 
 * @author    Jonathan Parker
 * @version   1.0.0
 * @since     1.0.0
 */

import { exec, execFile, fork, spawn } from 'child_process';

/**
 * The process module class.
 */
class ProcessModule {
    /**
     * The environment variables method.
     */
    envVars() {
        // If NODE_ENV is not set then use production

        const nodeEnv = process.env.NODE_ENV || 'production';

        console.log(`NODE_ENV: ${nodeEnv}`);
    }

    /**
     * The child processes method.
     *
     * See: https://www.geeksforgeeks.org/how-can-we-run-an-external-process-with-node-js/#
     */
    childProcesses() {
        this.spawn();
        this.fork();
        this.exec();
        this.execFile();
    }

    /**
     * Demonstrate the spawn child process.
     */
    spawn() {
        const lsProcess = spawn('ls');

        lsProcess.stdout.on('data', (data) => {
            console.log(`ls stdout:\n${data}`);
        });

        lsProcess.stderr.on("data", (data) => {
            console.log(`ls stderr: ${data}`);
        });

        lsProcess.on('exit', code => {
            console.log(`ls process ended with ${code}`);
        });
    }

    /**
     * Demonstrate the fork child process. Like
     * spawn, but parent and child can communicate
     * using the send() method.
     */
    fork() {
        const child = fork('src/child-file.mjs');

        child.on('message', (msg) => {
            console.log(`From child process: ${msg}`);
        });

        child.send('Hello from the parent process.');
    }

    /**
     * Demonstrate the exec child process. It establishes a shell.
     */
    exec() {
        exec('echo Hi from exec', (err, stdout, stderr) => {
            if (err) {
                console.error(err);
            } else {
                console.log(`stdout: ${stdout}`);
            }
        });
    }

    /**
     * Demonstrate the execFile child process. It does not
     * establish a shell and is therefore more efficient.
     */
    execFile() {
        const pythonProcess = execFile('python3', ['src/hello.py']);

        pythonProcess.stdout.on("data", (data) => {
            console.log(`py3 stdout:\n${data}`);
        });

        pythonProcess.stderr.on("data", (data) => {
            console.log(`py3 stderr: ${data}`);
        });

        pythonProcess.on("exit", (code) => {
            console.log(`py3 process ended with ${code}`);
        });
    }
}

export { ProcessModule };