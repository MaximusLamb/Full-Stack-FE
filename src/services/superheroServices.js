export const createSuperHeroes = (body) => {
  fetch('http://localhost:7891/superheroes', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json());
};

export const fetchSuperHeroes = (body) => {
  fetch('http://localhost:7891/superheroes', {
    method: 'GET',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json());
};
