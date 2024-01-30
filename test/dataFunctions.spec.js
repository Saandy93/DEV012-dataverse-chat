import { filterData } from "../lib/dataFunctions.js";
import { sortData } from "../lib/dataFunctions.js";
import data from "../data/dataset.js";



describe("filterData", () => {
  it("campoMatematdicas", () => {
    const filtradoMatematicas = filterData (
      data,
      "mainField",
      "Matemáticas"
    );
    expect(filtradoMatematicas.length).toBe(6);
  });
});

describe("sortData", () => {
  it("alfabetico", () => {
    const ordenDesc = sortData(
      data,
      "name",
    );
    const names = [...ordenDesc];
    const namesOrdenado = names.sort();
    expect(namesOrdenado).toEqual(names);
  });
});
