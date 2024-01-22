import { GuestDTO, GuestDetailDTO } from '../dto/guest.dto.js';

class GuestService {

    /**
     * @param {typeof import('../models/index.js').default} db
     */
    constructor(db) {
        this.db = db;
    }

    async add(personData) {

        const personDB = await this.db.Guest.create(personData)
        
        console.log('personData', personData);
        console.log('personRow', personDB);

        return new GuestDetailDTO(personDB);
    }

    async getAll() {

        const people = await this.db.Guest.findAll()

        return people.map(person => new GuestDTO(person));
    }

    async getById(id) {

        const personDB = await this.db.Guest.findByPk(id);

        return new GuestDetailDTO(personDB);
    }

    async delete(id) {

        const nbRowDeleted = await this.db.Guest.destroy({
            where : { id }
        });

        return nbRowDeleted === 1;
    }

    async update(id, personData) {

        // Only PostgreSQL et MSSQL (Microsoft)
        /*
        const [nbRow, personUpdated] = await this.db.Guest.update(personData, {
            where : { id },
            returning: true
        });
        */

        const [nbRow] = await this.db.Guest.update(personData, {
            where : { id }
        });
        
        if(nbRow === 1) {
            return await this.getById(id);
        }
        return null;
    }
}

export default GuestService;