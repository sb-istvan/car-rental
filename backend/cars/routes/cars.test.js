import supertest from "supertest";
import server from "../../app";

const requestWithSupertest = supertest(server);

describe('GET "/"', () => {
  test('GET "/" returns all cars', async () => {
    const res = await requestWithSupertest.get("/cars");
    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining("json"));
    expect(res.body).toEqual([
      {
        id: 1,
        make: "Audi",
        model: "A6 Avant",
        year: 2019,
        color: "black",
      },
      {
        id: 2,
        make: "Volkswagen",
        model: "Passat",
        year: 2017,
        color: "white",
      },
      {
        id: 3,
        make: "Opel",
        model: "Insignia",
        year: 2016,
        color: "blue",
      },
    ]);
  });
});

describe('GET "/:id"', () => {
  test('GET "/:id" returns given car', async () => {
    const res = await requestWithSupertest.get("/cars/1");
    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining("json"));
    expect(res.body).toEqual({
      id: 1,
      make: "Audi",
      model: "A6 Avant",
      year: 2019,
      color: "black",
    });
  });
});

describe('PUT "/:id"', () => {
  test('PUT "/:id" updates car and returns it', async () => {
    const res = await requestWithSupertest.put("/cars/1").send({
      id: 1,
      make: "Audi",
      model: "A8",
      year: 2010,
      color: "silver",
    });
    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining("json"));
    expect(res.body).toEqual({
      id: 1,
      make: "Audi",
      model: "A8",
      year: 2010,
      color: "silver",
    });
  });
});

describe('POST "/"', () => {
  test('POST "/" adds new car and returns the added item', async () => {
    const res = await requestWithSupertest.post("/cars").send({
      make: "Alfa Romeo",
      model: "Giulietta",
      year: 2021,
      color: "red",
    });
    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining("json"));
    expect(res.body).toEqual({
      id: 4,
      make: "Alfa Romeo",
      model: "Giulietta",
      year: 2021,
      color: "red",
    });
  });
});

describe('DELETE "/:id"', () => {
  test('DELETE "/:id" deletes given car and returns updated list', async () => {
    const res = await requestWithSupertest.delete("/cars/2");
    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining("json"));
    expect(res.body).toEqual([
      {
        id: 1,
        make: "Audi",
        model: "A8",
        year: 2010,
        color: "silver",
      },
      {
        id: 3,
        make: "Opel",
        model: "Insignia",
        year: 2016,
        color: "blue",
      },
      {
        id: 4,
        make: "Alfa Romeo",
        model: "Giulietta",
        year: 2021,
        color: "red",
      },
    ]);
  });
});
