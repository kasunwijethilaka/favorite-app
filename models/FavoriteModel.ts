import mongoose, { Schema, model, connect } from 'mongoose';
interface Favorite {
    name: string;
    status: boolean;
    currentDate: string;
}

const favoriteSchema = new Schema<Favorite>({
    name: { type: String },
    status: Boolean,
    currentDate: { type: String },
})

export default mongoose.models.Favorite || mongoose.model('Favorite', favoriteSchema);