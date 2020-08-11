import { CREATE_SUPERHERO_NAME, CREATE_SUPERHERO_POWER, CREATE_NEW_SUPERHERO, GET_SUPERHEROES } from '../actions/superheroActions';

export const initialState = {
  superheroes: [],
  name: '',
  power: ''
};

export default function reducer(state, action) {
  switch(action.type) {
    case CREATE_SUPERHERO_NAME:
      return { ...state, name: action.payload };
    case CREATE_SUPERHERO_POWER:
      return { ...state, power: action.payload };
    case CREATE_NEW_SUPERHERO:
      return { ...state, superheroes: action.payload };
    case GET_SUPERHEROES:
      return { ...state, superheroes: action.payload };
    default:
      return state;
  }
}
