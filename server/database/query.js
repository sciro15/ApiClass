class personas{
    constructor(database){
        this.database = database;
    }

    async getPersonas(){
        const query = 'select * from personas';
        return await this.database.query(query);
    }
    
    async getPersonaById(id){
        const query = 'SELECT * FROM personas WHERE id =?';
        return await this.database.query(query, [id]);
    }

    async deletePersonas(id){
        const query = 'DELETE FROM personas WHERE id =?';
        return await this.database.query(query);
    }

    async updatePersona(id, nombre, apellido){
        const query = 'UPDATE personas SET nombre =?, apellido =? WHERE id =?';
        return await this.database.query(query, [nombre, apellido, edad, id]);
    }
    
    async addPersona(nombre, apellido){
        const query = 'INSERT INTO personas (nombre, apellido, ) VALUES (?,?)';
        return await this.database.query(query, [nombre, apellido, edad]);
    }
}