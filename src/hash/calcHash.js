
import { createHash } from "crypto"
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from "fs"
const calculateHash = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const name = __dirname + "/files/fileToCalculateHashFor.txt"
    const reader = fs.createReadStream(name)
    reader.pipe(createHash('sha256')).setEncoding('hex').pipe(process.stdout)

};

await calculateHash();