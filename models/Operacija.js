import mongoose from "mongoose";
import { Schema } from "mongoose"

const operacijaSchema = new Schema({
    title: String,
    description: String

}, { collection: "Operacijos"})

const Operacija = mongoose.models.Operacijos || mongoose.model('Operacijos', operacijaSchema)

export default Operacija