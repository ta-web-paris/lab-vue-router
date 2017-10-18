const service = axios.create({
  baseURL: "http://localhost:3000/movies"
});

const api = {
  // Return instead a promise containing all the movies,
  getAll: () => {
    return service.get().then(response => {
      return response.data;
    });
  },
  // Return instead a promise containing one movie,
  getOne: id => {
    return service.get(id).then(resp => {
      return resp.data;
    });
  },
  // Make the request to add amovie and return a promise containing the added movie,
  addOne: info => {
    return service.post(info).then(resp => {
      return resp.data;
    });
  },
  editOne: (id, info) => {
    return service.put(id, info).then(resp => {
      return resp.data;
    });
  },
  // Make the request to edit a movie and return a promise containing the edited movie,
  deleteOne: id => {
    return service.delete(id).then(resp => {
      return resp;
    });
  } // Make the request to delete a movie
};
