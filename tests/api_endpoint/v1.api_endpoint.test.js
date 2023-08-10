const request = require("supertest");
const app = require("../../src/index");
const server = require("../../src/index");

describe("API Endpoint Testing", () => {
    afterAll((done) => {
        server.close(done);
    });

    test("GET / should return a object", async () => {
        const response = await request(app).get("/");

        expect(response.status).toBe(200);
        expect(response.body).toEqual(
            expect.objectContaining({
                endpoints: expect.any(Object),
                maintainer: expect.any(String),
                references: expect.any(Object)
            })
        );
    });

    test("GET /v1/surah should return array of object with length 114", async () => {
        const response = await request(app).get("/v1/surah");

        expect(response.status).toBe(200);
        expect(response.body).toHaveLength(114);
        expect(response.body).toEqual(
            expect.arrayContaining([
                expect.any(Object)
            ])
        );
    });

    describe("When surah is exist", () => {
        test("GET /v1/surah/{query} should return surahs object", async () => {
            const t = "manusia";
            const v = "31";
            const r = "madaniyah";

            const response = await request(app).get("/v1/surah").query({ t: t, v: v, r: r });

            expect(response.status).toBe(200);
            expect(response.body).toEqual(
                expect.arrayContaining([
                    expect.any(Object)
                ])
            );
        });
    });

    describe("When surah is doesn't exist", () => {
        test("GET /v1/surah/{query} should return surahs object", async () => {
            const t = "manusia";
            const v = "11";
            const r = "madaniyah";

            const response = await request(app).get("/v1/surah").query({ t: t, v: v, r: r });

            expect(response.status).toBe(404);
            expect(response.body).toEqual(
                expect.objectContaining({
                    code: 404,
                    message: "Could't found surah!",
                    stack: expect.any(String)
                })
            );
        });
    });

});