import { Question } from "../models/index.js";
// import db from "../config/connection.js";
export default async () => {
    try {
        // let modelExists = await models[modelName].db.db
        //   .listCollections({
        //     name: collectionName,
        //   })
        //   .toArray();
        // if (modelExists.length) {
        //   await db.dropCollection(collectionName);
        // }
        await Question.deleteMany({});
    }
    catch (err) {
        throw err;
    }
};
