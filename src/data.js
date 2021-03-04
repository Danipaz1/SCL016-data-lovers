// Hacer funcion obtenerCampeones 
export const obtenerCampeones = (lol, tag) => {
let champFilter = [];
  for (let champion in lol) {
    let tags = lol[champion].tags;
    for (let i = 0; i < tags.length; i++) {
      if (tags[i] == tag){
        champFilter.push(lol[champion]);
      }
    }
  }
  console.log(champFilter);

  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
}