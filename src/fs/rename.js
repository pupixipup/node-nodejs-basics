import fs from "fs/promises"

const fileExists = async path => {
    const exists = await fs.stat(path).catch(e => null)
    return Boolean(exists)
};

const rename = async () => {
    const from = "./files/wrongFilename.txt";
    const to = "./files/wrongFilename.txt";
    if ((await fileExists(to)) || !(await fileExists(from))) {
        throw new Error("FS operation failed")
    }
    await fs.rename(from, to)
};

await rename();