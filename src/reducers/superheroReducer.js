

export const initialState = {
  superheroes: []
};

export default function reducer(state, action) {
  switch(action.type) {
    case CREATE_SUPERHEROES:
      return { ...state, superheroes: action.payload };
    default:
      return state;
  }
}
