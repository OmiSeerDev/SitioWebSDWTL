import { MongoClient, ServerApiVersion } from "mongodb";

const dbUri =
  "mongodb+srv://omarmtinajero:310005991@dswtl.z8osnug.mongodb.net/Knee?retryWrites=true&w=majority";

const client = new MongoClient(dbUri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
export const dbConnect = async () => {
  await client.connect();
  await client.db("Knee");
  console.log("You successfully connected to MongoDB!");

  return client.db("Knee");
};
dbConnect().catch(console.dir);
