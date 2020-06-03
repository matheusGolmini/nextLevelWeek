import express from 'express';
import knex from '../database/connection';

class PointsController {
    async create (req: express.Request, res: express.Response) {
        const {
            name,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf,
            items
        } = req.body;
    
        //Verifica se as duas inserções no banco foram criadas no banco com sucesso
        const trx = await knex.transaction();
        
        const point = {
            image: 'image-fake',
            name,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf
        }

        const insertedIds = await trx('points').insert(point)

        const point_id = insertedIds[0];
        const pointItems = items.map((item_id: number) => {
            return{
                item_id,
                point_id
            }
        })
    
        await trx('point_items').insert(pointItems);
    
        return res.json({
            id: point_id,
            ...point,
        });
    }
}

export default PointsController;