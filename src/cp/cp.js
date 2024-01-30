import { fork } from "child_process"
import { dirname } from 'path';
import { fileURLToPath } from 'url';


const spawnChildProcess = async (args) => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    fork(__dirname + '/files/script.js', args);
};

// Put your arguments in function call to test this functionality
spawnChildProcess( [1, 2]);
