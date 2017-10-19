const movies = axios.create({
  baseURL: "http://localhost:3000/movies"
});

const api = {
  getAll: () => {
    return movies.get("movies").then(response => {
      return response.data;
    });
  },
  getOne: id => {
    return movies.get("movies/" + id).then(response => {
      return response.data;
    });
  },
  addOne: info => {
    return movies.post("movies", info).then(response => {
      return response.data;
    });
  },

  editOne: (id, info) => {
    return movies.put("movies" + id).then(response => {
      return response.data;
    });
  },
  deleteOne: id => {
    return movies.delete("movies" + id).then(response => {
      return response.data;
    });
  }
};
