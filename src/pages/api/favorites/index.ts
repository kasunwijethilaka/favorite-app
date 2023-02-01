import { idText } from 'typescript';
import { favorites } from '../../../data/favorites';

export default function handler(req: any, res: any) {
    if (req.method === 'GET') {
        res.status(200).json(favorites);
    } else if (req.method === 'POST') {
        const status = req.body.statusValue
        const id = req.body.id
        favorites.map(favorite => {
            if (id === favorite.id) {
                favorite.status = status;
            }
        })
        res.status(201).json(status);
    }
}