const service = axios.create({
  baseURL: "http://localhost:3000/movies"
});
const api = {
  getAll() {
    return service
      .get("/")
      .then(res => {
        return res.data;
      })
      .catch(err => {
        // console.err(err);
        throw err;
      });
  }, //: () => null, // Return instead a promise containing all the movies,
  getOne(id) {
    return service
      .get(`/` + id)
      .then(res => {
        return res.data;
      })
      .catch(err => {
        throw err;
      });
  }, //: id => null, // Return instead a promise containing one movie,
  addOne(newMovie) {
    return service
      .post(`/`, newMovie)
      .then(res => {
        return res.data;
      })
      .catch(err => {
        throw err;
      });
  },
  //: info => null, // Make the request to add amovie and return a promise containing the added movie,
  editOne(id, editMovie) {
    return service
      .patch(`/${id}`, editMovie)
      .then(res => {
        return res.data;
      })
      .catch(err => {
        throw err;
      });
  },
  //: (id, info) => null, // Make the request to edit a movie and return a promise containing the edited movie,
  deleteOne(id) {
    return service
      .delete(`/${id}`)
      .then(console.log("Movie deleted!"))
      .catch(error => {
        console.log(error);
        throw err;
      });
  } //: id => null // Make the request to delete a movie
};
