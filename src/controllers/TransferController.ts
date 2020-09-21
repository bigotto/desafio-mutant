import { Request, Response } from 'express';
import SaveDatabase from '../model/SaveDatabse';
import api from '../utils/api';
import Log from '../utils/log'
import { User } from '../interfaces'


const saveDatabse = new SaveDatabase();
const log = new Log();

export default class TransferController {
    async download(request: Request, response: Response) {
        try{
            const { data } = await api.get('');
            log.saveSucess(request);
            return response.send(data);
        } catch(e) {
            log.saveError(e)
            return response.status(400).send(e.message);
        }
    }

    async save(request: Request, response: Response) {
        const { data } = await api.get('');
        
        //Filter users in suites
        const usersInSuite = data.filter((user: User) => 
            user.address.suite.includes('Suite')
        )
        
        //Save to database
        try{
            await usersInSuite.map((user: User) => {
                saveDatabse.save(user);
            })

            log.saveSucess(request);
            return response.send({
                message: 'Saved info from users in DB!',
                usersInSuite
            })
        } catch(e) {
            log.saveError(e);
            return response.status(400).send(e.message);
        }
    }       
}