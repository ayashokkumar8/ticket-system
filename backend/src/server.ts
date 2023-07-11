// Import core
import express from "express";
// Import third party
import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
// Import customs
import routes from './routes'
import swaggerDocumentation from "./utils/swagger";

const start = async () => {
  try {
    // Creating the mongoDB memory server
    const mongoServer = await MongoMemoryServer.create();

    // Connecting to the mongoDB memory server using mongoose
    await mongoose.connect(mongoServer.getUri(), { dbName: "notificationsDB" });

    // Creating the express app
    const app = express();
    app.use(express.json());
    app.use(cors())
    app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));


    // simple route for starting
    app.get("/", (req, res) => {
      res.send(`
      <html>
      <body>
      <h1>Welcome to Ticketing system</h1>
      </body>
      </html>`)
    });

    // get all routes.
    app.use('/', routes);

    // get the APIs documenytation.
    swaggerDocumentation(app);
    // Starting the server
    await new Promise<void>((resolve, reject) => {
      app.listen(3001, resolve).on("error", reject);
    });
    console.log(`Server started at http://localhost:3001`);
  } catch (error: unknown) {
    console.log(error);
    process.exit(1);
  }
};

process.on("beforeExit", async () => {
  await mongoose.disconnect();
  console.log("mongoose disconnected");
});

if (require.main === module) {
  start();
}

export { start };
