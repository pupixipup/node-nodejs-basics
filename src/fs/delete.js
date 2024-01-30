import fs from "fs/promises"
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const fileExists = async path => {
    const exists = await fs.stat(path).catch(e => null)
    return Boolean(exists)
};

const remove = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const file = __dirname + "/files/fileToRemove.txt"
    if (!(await fileExists(file))) throw new Error("FS operation failed");
    await fs.unlink(file)
};

await remove();