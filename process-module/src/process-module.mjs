/**
 * (#)process-module.mjs    1.0.0   09/14/2023
 *
 * Copyright (c) Jonathan M. Parker
 * 324 Lantana Drive
 * Owings Mills, MD  21117 U.S.A
 * All Rights Reserved.
 */

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
     * The run external process method.
     */
    external() {
        console.log('Run external processes');
    }
}

export { ProcessModule };