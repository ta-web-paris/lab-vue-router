import axios from 'axios';

const service = axios.create({
  baseURL: 'http://localhost:3000/movies',
});

export default {
  getAll: () => service.get('/').then(res => res.data), // Return instead a promise containing all the movies,
  getOne: id => service.get(id).then(res => res.data), // Return instead a promise containing one movie,
  addOne: info => service.post('/', info).then(res => res.data), // Make the request to add amovie and return a promise containing the added movie,
  editOne: (id, info) => service.patch('' + id, info).then(res => res.data), // Make the request to edit a movie and return a promise containing the edited movie,
  deleteOne: id => service.delete('' + id).then(res => res.data), // Make the request to delete a movie
};