import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import { userAgent } from "next/server";
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
    .put(async (req, res) => {
        try {
            const favorite = await FavoriteModel.findOne({ _id: req.query.id });
            favorite.status = req.body.statusValue;
            await favorite.save();
            res.send('Item Updated');
        } catch (error) {
            console.log(error);
        }
    });

export default handler;