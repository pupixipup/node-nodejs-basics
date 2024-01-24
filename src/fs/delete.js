import fs from "fs/promises"

const fileExists = async path => {
    const exists = await fs.stat(path).catch(e => null)
    return Boolean(exists)
};

const remove = async () => {
    const file = "./files/fileToRemove.txt"
    if (!(await fileExists(file))) throw new Error("FS operation failed");
    await fs.unlink(file)
};

await remove();