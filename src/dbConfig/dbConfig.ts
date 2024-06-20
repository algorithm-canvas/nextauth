import mongoose from "mongoose";


export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URL!)
        const connection = mongoose.connection

        connection.on('connected', () => {
            console.log("MONGO DB Connected")
        })

        connection.on('error', (err) => {
            console.log('MONGODB connection error: ' + err);
            process.exit()
        })

        
    } catch (error) {
        console.log('Something went wrong in connection to DB');
        console.log(error)
    }
}