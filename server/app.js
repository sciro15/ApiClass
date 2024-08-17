import express from 'express';
import cors from 'cors';
import router from './routes/route.js'; // Importar el router definido
import dotenv from 'dotenv';
import helmet from 'helmet';
import redis from  'redis'; // Importar el middleware para limitar las peticiones




dotenv.config();

const app = express();
const port = process.env.PORT || 3000;  

app.use(cors());
app.use(helmet());

const redisClient = redis.createClient({
    url: process.env.REDIRECT_URL
});

// const limiter = ratelimit({
//     store : new ratelimit.RedisStore({
//         clien: redisClient,
//         prefix: 'rate-limit:' 
//     }),
//     windowMs: 15 * 60 * 1000, // 15 min
//     max: 100, // Limitar a 100 requests por minuto
//     message: 'Too many requests, please try again later.'
// });



app.use(express.json());

// Usar el router que definiste
app.use(router);

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});
