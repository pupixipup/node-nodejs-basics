import { pipeline } from "node:stream/promises"
import fs from "node:fs"
import zlib from "node:zlib"
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const compress = async () => {  
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const name = __dirname + "/files/fileToCompress.txt"
    const to = __dirname + "/files/archive.gz"
    await pipeline(fs.createReadStream(name), zlib.createGzip(), fs.createWriteStream(to))
};

await compress();