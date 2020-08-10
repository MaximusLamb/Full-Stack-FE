export const CREATE_SUPERHEROES = 'CREATE_SUPERHEROES';
export const createSuperHeroes = superheroes => ({
  type: CREATE_SUPERHEROES,
  payload: superheroes
});
