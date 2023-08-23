import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);
    if(!process.env.MONGODB_URL) return console.log('MONGO DB URL not found')
    if(isConnected) return console.log('Connected MondoDB')

    const password = encodeURIComponent(`${process.env.MONGODB_PASSWORD}`);
    const connectionStr = `mongodb+srv://${process.env.MONGODB_USER}:${password}@cluster0.6x3pe.mongodb.net/?retryWrites=true&w=majority`;

    try {
        await mongoose.connect(connectionStr);
        isConnected = true
        console.log('Connected MondoDB')
    } catch (error) {
        console.log(error)
    }
}