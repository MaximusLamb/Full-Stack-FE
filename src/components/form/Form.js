import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSuperHeroName, createSuperHeroPower, createNewSuperHero } from '../../actions/superheroActions';
import { getName, getPower } from '../../selectors/superheroSelectors';

export const Form = () => {
  const dispatch = useDispatch();
  const name = useSelector(getName);
  const power = useSelector(getPower);

  const handleChange = ({ target }) => {
    if(target.name === 'name') dispatch(createSuperHeroName(target.value));
    if(target.name === 'power') dispatch(createSuperHeroPower(target.value));
  };

  const handleSubmit = event => {
    event.preventDefault();
    createNewSuperHero({ name, power });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>MAKE A NEW SUPERHERO</h1>
      <label> CREATE NAME
        <input name='name' onChange={handleChange}></input>
      </label>
      <label> CREATE SUPERPOWER
        <input power='power' onChange={handleChange}></input>
      </label>
      <button>CREATE SUPERHERO</button>
    </form>
  );};


