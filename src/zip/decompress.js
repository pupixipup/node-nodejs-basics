import { pipeline } from "node:stream/promises"
import fs from "node:fs"
import zlib from "node:zlib"
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const decompress = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const to = __dirname + "/files/fileToCompress.txt"
    const from = __dirname + "/files/archive.gz"
    await pipeline(fs.createReadStream(from), zlib.createUnzip(), fs.createWriteStream(to))
};

await decompress();