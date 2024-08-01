import mongoose from "mongoose";

let liveUri =
  "mongodb+srv://FinbarrDB:codelab06@cluster0.2xzneqt.mongodb.net/e_child?retryWrites=true&w=majority&appName=Cluster0";

export const dbConnect = async () => {
  try {
    await mongoose
      .connect(liveUri)
      .then(() => {
        console.log("Connected successfully");
      })
      .catch((error) => {
        console.log("An error occured", error);
      });
  } catch (error) {
    console.log(error);
  }
};
