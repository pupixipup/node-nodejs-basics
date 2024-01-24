import { pipeline } from 'node:stream/promises';
import fs from 'node:fs';
const read = async () => {
    const name = "./files/fileToRead.txt"
    await pipeline(fs.createReadStream(name),
        process.stdout)
};

await read();