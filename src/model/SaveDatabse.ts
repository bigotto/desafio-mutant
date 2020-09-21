import db from '../database/connection';
import { User } from '../interfaces'

export default class SaveDatabase {
    
    async save(user: User) {
        const {name, username, email, phone, address: {street, suite, city, zipcode, geo: {lat, lng}}} = user;
        
        const trx = await db.transaction();
        
        try{
            const user_id = await trx('personal_data').insert({
                name,
                username 
            });
            
            await trx('address').insert({
                user_id,
                street,
                suite,
                city,
                zipcode,
                lat,
                lng
            });

            await trx('contact_info').insert({
                user_id,
                email,
                phone
            })
            await trx.commit();
    
        } catch (err) {
            await trx.rollback();
        }
    }        
}
