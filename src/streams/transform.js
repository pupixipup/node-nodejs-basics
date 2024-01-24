import { pipeline } from 'node:stream/promises';
import {Transform } from "stream"
import fs from 'node:fs';

const reverseStream = new Transform({
    transform(chunk, encoding, callback) {
        const transformedData = chunk.toString().split("").reverse().join("") + "\n";
        this.push(transformedData);
        callback();
    }
});
const transform = async () => {
    await pipeline(process.stdin, reverseStream, process.stdout)
};

await transform();