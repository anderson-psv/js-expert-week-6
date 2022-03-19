import fs from "fs";
import fsPromises from "fs/promises";

import config from "./config.js";
import { join, extname } from "path";

const {
    dir: { publicDirectory },
} = config;

export class Service {
    createFileStream(filename) {
        return fs.createReadStream(filename);
    }

    async getFileinfo(file) {
        // file = home/index.html
        const fullFilePath = join(publicDirectory, file);
        // validate if file exists, else throws error
        await fsPromises.access(fullFilePath);
        const fileType = extname(fullFilePath);

        return {
            name: fullFilePath,
            type: fileType,
        };
    }

    async getFileStream(file) {
        const { name, type } = await this.getFileinfo(file);
        return {
            stream: this.createFileStream(name),
            type,
        };
    }
}
