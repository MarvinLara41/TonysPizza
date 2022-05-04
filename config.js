import dotenv from "dotenv";
dotenv.config();

const config = {
  MONGODB_URI: process.env.mongodbURI,
};

export default config;
