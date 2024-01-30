import fs from "fs/promises"
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const fileExists = async path => {
    const exists = await fs.stat(path).catch(e => null)
    return Boolean(exists)
};

const list = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const folder = __dirname + "/files"
    if (!(await fileExists(folder))) throw new Error("FS operation failed");
    const content = await fs.readdir(folder);
    console.log(content)
};

await list();