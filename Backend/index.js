import app from './server.js';
import mongodb from 'mongodb';
import dotenv from 'dotenv';

async function main (){
    dotenv.config();

    const client = new mongodb.MongoClient(process.env.DATABASE_URI);
    const port = process.env.PORT;
   
    try{
        await client.connect();

        app.listen(port, ()=>{
            console.info(`Server running in port ${port}`);
        });
    } catch (e){
        console.error(e);
        process.exit(1);
    }
}
main().catch(console.error);