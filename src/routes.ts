import { Router } from 'express';
import {Request, Response} from 'express';
import Teste from './Controllers/Teste';


const routes = Router();

routes.get('/teste' , Teste.show)
routes.get('/leiloes', Teste.show)


export default routes;