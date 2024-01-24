import { pipeline } from "node:stream/promises"
import fs from "node:fs"
import zlib from "node:zlib"

const decompress = async () => {
    const to = "./files/fileToCompress.txt"
    const from = "./files/archive.gz"
    await pipeline(fs.createReadStream(from), zlib.createUnzip(), fs.createWriteStream(to))
};

await decompress();