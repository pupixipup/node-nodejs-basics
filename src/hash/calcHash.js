
import { createHash } from "crypto"
import fs from "fs"
const calculateHash = async () => {
    const name = "./files/fileToCalculateHashFor.txt"
    const reader = fs.createReadStream(name)
    reader.pipe(createHash('sha256')).setEncoding('hex').pipe(process.stdout)

};

await calculateHash();