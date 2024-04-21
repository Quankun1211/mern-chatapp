import mongoose from "mongoose"
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL)
    console.log("Connected");
  }catch(err) {
    console.log("Error connecting DB");
  }
}

export default connect