import os from "os"
import { Worker } from "worker_threads"
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const performCalculations = async () => {
    // Write your code here
    return new Promise ((res, rej) => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const cores = os.cpus().length;
    let results = []
    let finished = 0;
    let length = 10 + cores;
    for (let i = 0; i < length; i++) {
        const worker = new Worker(__dirname + "/worker.js", { workerData: i})
        worker.on('message', (result) => {
            results.push({status: 'resolve', data: result})
        });
        worker.on('error', () => results.push({status: "error", data: null}))
        worker.on("exit", () => {
            finished += 1;
            if (finished === length) {
                const sorted = results.sort((a, b) => Number(a.data) - Number(b.data));
                console.log(sorted)
                res(sorted);
            }
        })
    }
    })
};

await performCalculations();