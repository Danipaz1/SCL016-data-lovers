// Función para recorrer la data (champs) y retornar los campeones filtrados por el parámetro tag
export const obtenerCampeones = (champs, tag) => {
/*let champFilter = [];
  for (let index in champs) {
    champs[index].tags.forEach(tagElement => {
      if (tagElement == tag) champFilter.push(champs[index])
    });
  }
  return champFilter;*/

  let keys = Object.keys(champs);

  let values = Object.values(champs);

  let result = values.filter(element => {
    return element.tags.includes(tag);
  })

  return result;
};

