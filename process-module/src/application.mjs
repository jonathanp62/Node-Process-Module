/**
 * (#)application.mjs   1.0.0   09/14/2023
 *
 * Copyright (c) Jonathan M. Parker
 * 324 Lantana Drive
 * Owings Mills, MD  21117 U.S.A
 * All Rights Reserved.
 */

import { ProcessModule } from "./process-module.mjs";

/**
 * The application class.
 */
class Application {
    /**
     * The run method.
     */
    run() {
        const processModule = new ProcessModule();

        processModule.envVars();
    }
}

export { Application };