import fs from "fs/promises"
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const fileExists = async path => {
    const exists = await fs.stat(path).catch(e => null)
    return Boolean(exists)
};

const rename = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const from = __dirname + "/files/wrongFilename.txt";
    const to = __dirname + "/files/properFilename.md";
    if ((await fileExists(to)) || !(await fileExists(from))) {
        throw new Error("FS operation failed")
    }
    await fs.rename(from, to)
};

await rename();