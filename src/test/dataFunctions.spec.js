import { filterData } from "../lib/dataFunctions.js";
import { sortData } from "../lib/dataFunctions.js";
import { data as fakeData } from "../data/dataset.js";
import { dataSort as fakeDataa } from "../data/dataset.js";


describe("filterData", () => {
  it("campoMatematicas", () => {
    const filtradoMatematicas = filterData (
      fakeData,
      "mainField",
      "Matemáticas"
    );
    expect(filtradoMatematicas.length).toBe(2);
  });
});

describe("sortData", () => {
  it("alfabetico", () => {
    const ordenDesc = sortData(
      fakeDataa,
      "name",
    );
    const names = [...ordenDesc];
    const namesOrdenado = names.sort();
    expect(namesOrdenado).toEqual(names);
  });
});
