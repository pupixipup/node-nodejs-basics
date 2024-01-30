import fs from "fs/promises"
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const exists = async path => {
    const exists = await fs.stat(path).catch(e => null)
    return Boolean(exists)
};

const copy = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const from = __dirname + "/files"
    const to = __dirname + "/from_copy"
    if (!(await exists(from)) || (await exists(to))) {
        throw new Error("FS operation failed")
    }
    await fs.cp(from, to, {recursive: true});
};

await copy();
