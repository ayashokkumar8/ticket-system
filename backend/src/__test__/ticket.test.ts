// Import core
import express from "express";

// Import third party
import supertest from "supertest";
import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
// Import customs
import routes from "../routes";

// create test server for do some test.
const testServer = async () => {

    const app = express();

    app.use(express.json());

    app.use('/', routes)
    return app;
}

describe("tickets", () => {
    beforeAll(async () => {
        // Creating the mongoDB memory server
        const mongoServer = await MongoMemoryServer.create();

        // Connecting to the mongoDB memory server using mongoose
        await mongoose.connect(mongoServer.getUri(), { dbName: "notificationsDB" });

    });


    afterAll(async () => {
        // disconnecting to the mongoDB memory server using mongoose
        await mongoose.disconnect();
        await mongoose.connection.close();
    });

    describe("get tickets route", () => {

        describe("tickets api not working", () => {
            it("should return a 200 status and the tickets", async () => {

                const data = await supertest(await testServer()).get('/tickets');

                expect(data.status).toBe(200);

            });
        });
        describe("create ticket route", () => {
            describe("given the ticket information is empty", () => {
                it("should return a 500", async () => {
                    const { status } = await supertest(await testServer()).post("/tickets");

                    expect(status).toBe(500);
                });
            });
        });
    });
});