import mongoose, { Schema, model, connect } from 'mongoose';
interface Favorite {
    name: string;
    status: boolean;
}

const favoriteSchema = new Schema<Favorite>({
    name: { type: String },
    status: Boolean
})

export default mongoose.models.Favorite || mongoose.model('Favorite', favoriteSchema);