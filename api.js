const service = axios.create({
  baseURL: "http://localhost:3000/movies"
});

const api = {
  getAll: function() {
    return service.get("/").then(res => res.data);
  }, // Return instead a promise containing all the movies,

  getOne: function(id) {
    return service.get("/" + id).then(res => res.data);
  }, // Return instead a promise containing one movie,

  addOne: function(info) {
    return service.post("/movies", info).then(res => {
      res.data;
    });
  }, // Make the request to add amovie and return a promise containing the added movie,

  editOne: function(id, info) {
    return service.patch(id, info).then(res => {
      res.data;
    });
  }, // Make the request to edit a movie and return a promise containing the edited movie,

  deleteOne: function(id) {
    return service.delete(id).then(res => {
      res.data;
    });
  }
  // Make the request to delete a movie
};
