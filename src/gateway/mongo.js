import { MongoClient } from "mongodb";

const getDb = async () => {
  const client = new MongoClient(process.env.MONGO_URL);
  await client.connect();
  return client.db("candy");
};

export const getCandyBarsCol = async () => {
  const db = await getDb();
  return db.collection("candyBarCol");
};
