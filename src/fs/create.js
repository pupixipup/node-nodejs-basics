import fs from "fs/promises"
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const fileExists = async (path) => {
  const exists = await fs.stat(path).catch((e) => null)
  return Boolean(exists)
}

const create = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const name = __dirname + "/files/fresh.txt"
  if (await fileExists(name)) throw new Error("FS operation failed")
  await fs.writeFile(name, "I am fresh and young")
}

await create()
