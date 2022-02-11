import {Request, Response} from 'express';

export default{
    async show(request : Request, response : Response){
         
        return response.json({nome: 'teste' , produto: 'fogão'});
    }
}