import fs from "fs/promises"

const exists = async path => {
    const exists = await fs.stat(path).catch(e => null)
    return Boolean(exists)
};

const copy = async () => {
    const from = "files"
    const to = "from_copy"
    if (!(await exists(from)) || (await exists(to))) {
        throw new Error("FS operation failed")
    }
    await fs.cp(from, to, {recursive: true});
};

await copy();
