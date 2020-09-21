import { Request, Response } from 'express';
import SaveDatabase from '../model/SaveDatabse';
import api from '../utils/api';
import Log from '../utils/log'
import { User } from '../interfaces'


const saveDatabse = new SaveDatabase();
const log = new Log();

export default class TransferController {
    async download(request: Request, response: Response) {
        const { data } = await api.get('');
        log.save(request, undefined);
        response.send(data);
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

            return response.send({
                message: 'Saved info from users in DB!',
                usersInSuite
            })
        } catch(e) {
            return response.status(400).send(e.message);
        }
    }       
}