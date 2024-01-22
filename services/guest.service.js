import db from './../models/index.js';

class GuestService {

    async add(personData) {

        const personDB = await db.Guest.create(personData)
        
        console.log('personData', personData);
        console.log('personRow', personDB);

        return personDB;
    }

    async getAll() {

        const people = await db.Guest.findAll()

        return people;
    }

    async getById(id) {

        const personDB = await db.Guest.findByPk(id);

        return personDB;
    }

    async delete(id) {

        const nbRowDeleted = await db.Guest.destroy({
            where : { id }
        });

        return nbRowDeleted === 1;
    }

    async update(id, personData) {

        // Only PostgreSQL et MSSQL (Microsoft)
        /*
        const [nbRow, personUpdated] = await db.Guest.update(personData, {
            where : { id },
            returning: true
        });
        */

        const [nbRow] = await db.Guest.update(personData, {
            where : { id }
        });
        
        if(nbRow === 1) {
            return await this.getById(id);
        }
        return null;
    }
}

export default GuestService;