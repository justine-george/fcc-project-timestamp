const app = require("../app");
const request = require("supertest");
const mockDate = require("mockdate");

const pingJSON = require("./mock-response-data/ping.json");
const validDateJSON = require("./mock-response-data/validDate.json");
const errorJSON = require("./mock-response-data/error.json");

describe("GET /", () => {
  it("should return the index.html file", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200);
    expect(res.type).toBe("text/html");
  });
});

describe("GET /api/ping", () => {
  it("should return healthy status", async () => {
    const res = await request(app).get("/api/ping");
    expect(res.status).toBe(200);
    expect(res.body).toStrictEqual(pingJSON);
  });
});

describe("GET /api", () => {
  afterAll(() => {
    mockDate.reset();
  });

  it("should return the current date", async () => {
    const currentDate = new Date(validDateJSON.utc);
    mockDate.set(currentDate);

    const res = await request(app).get("/api");
    expect(res.status).toBe(200);
    expect(res.body).toStrictEqual(validDateJSON);
  });
});

describe("GET /api/:date", () => {
  // valid date
  it("should return the date passed in the url", async () => {
    const res = await request(app).get("/api/2000-01-01");
    expect(res.status).toBe(200);
    expect(res.body).toStrictEqual(validDateJSON);
  });
  it("should return the date passed in the url", async () => {
    const res = await request(app).get("/api/946684800000");
    expect(res.status).toBe(200);
    expect(res.body).toStrictEqual(validDateJSON);
  });
  it("should return the date passed in the url", async () => {
    const res = await request(app).get("/api/2000-1-1");
    expect(res.status).toBe(200);
    expect(res.body).toStrictEqual(validDateJSON);
  });
  it("should return the date passed in the url", async () => {
    const res = await request(app).get("/api/01 Jan 2000");
    expect(res.status).toBe(200);
    expect(res.body).toStrictEqual(validDateJSON);
  });

  // invalid date
  it("should return error for invalid date passed in the url", async () => {
    const res = await request(app).get("/api/invalid-date");
    expect(res.status).toBe(400);
    expect(res.body).toStrictEqual(errorJSON);
  });
  it("should return error for invalid date passed in the url", async () => {
    const res = await request(app).get("/api/2000-01-32");
    expect(res.status).toBe(400);
    expect(res.body).toStrictEqual(errorJSON);
  });
  it("should return error for invalid date passed in the url", async () => {
    const res = await request(app).get("/api/2000-21-01");
    expect(res.status).toBe(400);
    expect(res.body).toStrictEqual(errorJSON);
  });
});
