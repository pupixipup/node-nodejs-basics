import fs from "fs/promises"

const fileExists = async path => {
    const exists = await fs.stat(path).catch(e => null)
    return Boolean(exists)
};

const list = async () => {
    const folder = "files"
    if (!(await fileExists(folder))) throw new Error("FS operation failed");
    const content = await fs.readdir(folder);
    console.log(content)
};

await list();