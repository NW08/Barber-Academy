import mongoose from "mongoose";

const connection = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.DATABASE_URL);
    console.log(`Database Connected: ${connection.host} - ${connection.port}`);
  } catch (error) {
    console.log(error);
  }
};

export default connection;
