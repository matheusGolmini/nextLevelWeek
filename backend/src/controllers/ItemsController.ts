import express from 'express';
import knex from '../database/connection';

class ItemsController {
    async index(req: express.Request, res: express.Response){
        const items = await knex('items').select('*');
    
        const serializedItems = items.map(item =>{
            return {
                title: item.title,
                id: item.id,
                image_url: `http://localhost:3333/uploads/${item.image}`
            }
        })
        return res.json(serializedItems);
    }
        
}

export default ItemsController;