import { Request, Response } from 'express';
import SaveDatabase from '../model/SaveDatabse';
import api from '../utils/api';
import { User } from '../interfaces'

const saveDatabse = new SaveDatabase();

export default class TransferController {
    async download(request: Request, response: Response) {
        const { data } = await api.get('');
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
            console.log('comecando a escrever no banco')
            await Promise.all(usersInSuite.map((user: User) => {
                saveDatabse.save(user)
            }))
        } catch(e) {
            return response.status(400).send(e.message);
        }
        console.log('fim')
        response.send(usersInSuite)
    }
}