import fs from "fs/promises"

const fileExists = async path => {
    const exists = await fs.stat(path).catch(e => null)
    return Boolean(exists)
};

const create = async () => {
    const name = "./files/fresh.txt"
    if (await fileExists(name)) throw new Error("FS operation failed");
    await fs.writeFile(name, 'I am fresh and young');
};

await create();