import { pipeline } from 'node:stream/promises';
import fs from 'node:fs';
const write = async () => {
    const name = "./files/fileToWrite.txt"
    await pipeline(process.stdin, fs.createWriteStream(name))
};

await write();