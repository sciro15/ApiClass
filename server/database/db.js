import mysql2 from "mysql2/promise";


class database {
    constructor(config) {
        this.config = config;
        mysql2.createPool(this.config)
    }
    
    async getConnection() {
        return await this.pool.getConnection();
    }

    async query(sql, params) {
        try {
            const [rows] =await connection.query(sql, params);
            return rows;
            
        } 
        finally {
            connection.release();
        }
        
    }
}
