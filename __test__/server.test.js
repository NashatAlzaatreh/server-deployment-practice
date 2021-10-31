"use strict";

const { app } = require("../server");
const supertest = require("supertest");
const request = supertest(app);

describe("API Server Testing", () => {
  test("handle invalid URLS", async () => {
    const response = await request.get("/not-found");
    expect(response.status).toEqual(404);
  });

  test("if there is a home route", async () => {
    const response = await request.get("/");
    expect(response.status).toEqual(200);
    expect(response.text).toEqual("I am working ✔️");
  });

  test("/data works", async () => {
    const response = await request.get("/data");
    expect(response.status).toEqual(200);
    expect(typeof response.body).toEqual("object");
  });
  test("stamper middleware works", async () => {
    const response = await request.get("/data");
    expect(response.status).toEqual(200);
    expect(response.body.time).toBeDefined();
  });
});
