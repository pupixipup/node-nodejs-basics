import { pipeline } from 'node:stream/promises';
import fs from 'node:fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const read = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const name = __dirname + "/files/fileToRead.txt"
    await pipeline(fs.createReadStream(name),
        process.stdout)
};

await read();