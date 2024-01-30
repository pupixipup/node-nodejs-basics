import { pipeline } from 'node:stream/promises';
import fs from 'node:fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const write = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const name = __dirname + "/files/fileToWrite.txt"
    await pipeline(process.stdin, fs.createWriteStream(name))
};

await write();