import os from "os"
import { Worker, getEnvironmentData } from "worker_threads"

const performCalculations = async () => {
    // Write your code here
    return new Promise ((res, rej) => {
    const cores = os.cpus().length;
    let results = []
    let finished = 0;
    let length = 10 + cores;
    for (let i = 0; i < length; i++) {
        const worker = new Worker("./worker.js", { workerData: i})
        worker.on('message', (result) => {
            results.push({status: 'resolve', data: result})
        });
        worker.on('error', () => results.push({status: "error", data: null}))
        worker.on("exit", () => {
            finished += 1;
            if (finished === length) {
                console.log(results);
                res(results);
            }
        })
    }
    })
};

await performCalculations();