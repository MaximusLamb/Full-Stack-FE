const { createNewSuperHero, CREATE_NEW_SUPERHERO, createSuperHeroName, CREATE_SUPERHERO_NAME, createSuperHeroPower, CREATE_SUPERHERO_POWER } = require('./superheroActions');


describe('superhero actions', () => {
  it('CREATE_NEW_SUPERHERO action', () => {
    const action = createNewSuperHero({
      name: 'Jack',
      power: 'Samurai Skills'
    });

    expect(action).toEqual({
      type: CREATE_NEW_SUPERHERO,
      payload: {
        name: 'Jack',
        power: 'Samurai Skills'
      }
    });
  });

  it('CREATE_SUPERHERO_NAME action', () => {
    const action = createSuperHeroName({ name: 'Jack' });

    expect(action).toEqual({
      type: CREATE_SUPERHERO_NAME,
      payload: { name: 'Jack' }
    });
  });

  it('CREATE_SUPERHERO_POWER action', () => {
    const action = createSuperHeroPower({ power: 'Samurai Skills' });

    expect(action).toEqual({
      type: CREATE_SUPERHERO_POWER,
      payload: { power: 'Samurai Skills' }
    });
  });
});
