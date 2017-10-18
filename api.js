const service = axios.create({
  baseURL: "http://localhost:3000/"
});

const api = {
  getAll: () => {
    return service.get("movies").then(response => {
    return response.data;
    });
  }, // Return instead a promise containing all the movies,


  getOne: id => {
    return service.get("movie.id").then(response => {
    return response.data;
    });
  }, // Return instead a promise containing one movie,
  addOne: info => null, // Make the request to add amovie and return a promise containing the added movie,
  editOne: (id, info) => null, // Make the request to edit a movie and return a promise containing the edited movie,
  deleteOne: id => null // Make the request to delete a movie
};
