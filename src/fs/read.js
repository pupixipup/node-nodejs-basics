import fs from "fs/promises"
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const fileExists = async path => {
    const exists = await fs.stat(path).catch(e => null)
    return Boolean(exists)
};

const read = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const file = __dirname + "/files/fileToRead.txt"
    if (!(await fileExists(file))) throw new Error("FS operation failed");
    const content = await fs.readFile(file)
    console.log(content.toString())
};

await read();