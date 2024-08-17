import { Router } from "express";
// import db  from "../database/db.js";
// import query  from "../database/query.js";

// const database = new db(config);
// const Query = new query(database);
const router = Router();


router.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to the API!' });

});



export default router;
