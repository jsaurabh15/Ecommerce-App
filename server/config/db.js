import mongoose from 'mongoose';
import colors from 'colors';

const connectDB = async () => {
    try {
       const connect = await mongoose.connect(process.env.MONGO_URL);
       console.log(`Connected to Mongodb database ${connect.connection.host}`.bgMagenta.white);
    } catch (error) {
        console.log(`Error connecting to database: ${error}`.bgRed.white);
    }
};

export default connectDB;
