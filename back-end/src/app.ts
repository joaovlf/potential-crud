import * as express from 'express';
import * as cors from 'cors';
import * as logger from 'morgan';

import { connectServerOnBD } from './config/db';
import {userRouter} from './routes/developer';


/*
*Cria a aplicação
*/
export const app = express();
/*
*Libera o acesso ao app
*/
app.use(cors());
/*
* Permite receber e enviar json
*/
app.use(express.json());
/*
* Configura os logs
*/
app.use(logger('dev'));
/*
* Permite receber e enviar json
*/
connectServerOnBD();

/**
 * configuração de rotas
 */
app.use('/developers', userRouter);

app.use('/',(req,res)=>{
    res.json("app crud")
})
