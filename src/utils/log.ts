import fs from 'fs';
import { Request } from 'express';
import timestamp from './getTime';

export default class Log{
    save(request: Request, error: Error){
        const time = timestamp();
        
        if(request != null){
            const data = `${time} - [${request.method}] from:${request.headers.host}${request.path}`;
        } else {
            const data = `${time} - [ERROR] ${error.message}`
        }
        // const log = JSON.stringify(data);
        // fs.writeFileSync('notes.json', log)
    }

    load(){
        try{
            const logData = fs.readFileSync('log.json');
            const log = logData.toString();
            return JSON.parse(log);
        } catch (e) {
            return [];
        }
    }
}
