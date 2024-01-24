import { pipeline } from "node:stream/promises"
import fs from "node:fs"
import zlib from "node:zlib"
const compress = async () => {
    const name = "./files/fileToCompress.txt"
    const to = "./files/archive.gz"
    await pipeline(fs.createReadStream(name), zlib.createGzip(), fs.createWriteStream(to))
};

await compress();