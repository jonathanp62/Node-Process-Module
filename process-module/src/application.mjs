/**
 * (#)application.mjs   1.0.0   09/14/2023
 *
 * Copyright (c) Jonathan M. Parker
 * All Rights Reserved.
 * 
 * @author    Jonathan Parker
 * @version   1.0.0
 * @since     1.0.0
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
        processModule.childProcesses();
    }
}

export { Application };