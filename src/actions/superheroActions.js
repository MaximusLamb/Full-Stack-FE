export const CREATE_SUPERHERO_NAME = 'CREATE_SUPERHERO_NAME';
export const createSuperHeroName = name => ({
  type: CREATE_SUPERHERO_NAME,
  payload: name
});

export const CREATE_SUPERHERO_POWER = 'CREATE_SUPERHERO_POWER';
export const createSuperHeroPower = power => ({
  type: CREATE_SUPERHERO_POWER,
  payload: power
});

export const CREATE_NEW_SUPERHERO = 'CREATE_NEW_SUPERHERO';
export const createNewSuperHero = superheroes => ({
  type: CREATE_NEW_SUPERHERO,
  payload: superheroes
});

export const GET_SUPERHEROES = 'GET_SUPERHEROES';
export const getSuperHeroes = superheroes => ({
  type: GET_SUPERHEROES,
  payload: superheroes
});
