//traer funciones de filtro/orden desde dataVerse

export function filterData(data, camposEstudio, camposFiltrados) {
  const tarjetasFiltradas = data.filter ((tarjeta) => {
    const facts = tarjeta.facts && tarjeta.facts[camposEstudio];
    return facts && facts.includes(camposFiltrados);
  });

  return tarjetasFiltradas;
}
//function sortData(data, sortBy, sortOrder)
export function sortData(data, alfabetico, abecedario) {
  if (abecedario === "Asc") {
    return data.sort((a, b) => a[alfabetico].localeCompare(b[alfabetico]));
  } else if (abecedario === "Desc") {
    return data.sort((a, b) => b[alfabetico].localeCompare(a[alfabetico]));
  } else {
    return data; // Orden
  }
}

export function characterData(characterId, data) {
  if (Array.isArray(data)) {
    const character = data.find((personaje) => personaje.id === characterId);
    if (character) {
      // Acceder a la información específica del personaje
      const nombre = character.name;
      const descripcion = character.description;
      const imagen = character.imageUrl;
      return { nombre, descripcion, imagen };
    }
  }
}
