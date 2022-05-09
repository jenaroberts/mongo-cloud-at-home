import { getCandyBarsCol } from "../gateway/mongo.js";

export const createACandyBar = async (candyBar) => {
  const col = await getCandyBarsCol();
  const { insertedId } = await col.insertOne(candyBar);
  return insertedId.toString();
};

export const getOneCandyBar = async (name) => {
  const col = await getCandyBarsCol();
  return col.findOne({ name });
};

export const getAllCandyBars = async () => {
  const col = await getCandyBarsCol();
  return col.find().toArray();
};

export const updateOneCandyBar = async (name, update) => {
  const col = await getCandyBarsCol();
  await col.updateOne({ name }, update);
};

export const deleteOneCandyBar = async (name) => {
  const col = await getCandyBarsCol();
  await col.deleteOne({ name });
  console.log("this was deleted successfully");
};
