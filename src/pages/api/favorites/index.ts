import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import FavoriteModel from '../../../../models/FavoriteModel';
import connectDB from '../../../../utils/connectDB';

connectDB();

const handler = nc<NextApiRequest, NextApiResponse>({
    onError: (err, req, res, next) => {
        console.error(err.stack);
        res.status(500).end("Something broke!");
    },
    onNoMatch: (req, res) => {
        res.status(404).end("Page is not found");

    },
})
    .get(async (req, res) => {
        try {
            const favorites = await FavoriteModel.find({})
            res.send(favorites);
        } catch (error) {
            console.log(error);

        }
    })
    .post(async (req, res) => {
        const { name, status, currentDate } = req.body;
        const newFavorite = new FavoriteModel({ name, status, currentDate })
        try {
            await newFavorite.save();
            res.send('New favorite Added');
        } catch (error) {
            console.log(error);

        }
    });

export default handler;