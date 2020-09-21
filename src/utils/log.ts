import fs from 'fs';
import { Request, Response } from 'express';
import timestamp from './getTime';

export default class Log{
    saveSucess(request : Request){
        const time = timestamp();
        const data = `${time} - [${request.method}] from:${request.headers.host}${request.path}\n`;
        fs.appendFileSync('notes.txt', data)
    }
    saveError(error: Error){
        const time = timestamp();
        const data = `${time} - [ERROR] ${error.message}\n`;
        fs.appendFileSync('notes.txt', data);
    }
    load(request: Request, response: Response){
        try{
            const logData = fs.readFileSync('notes.txt');
            const log = logData.toString();
            return response.send(log);
        } catch (e) {
            return response.status(400).send(e.message);
        }
    }
}
