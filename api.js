const service = axios.create({
  baseURL:
   "http://localhost:3000/"
});

const api = {
  getAll: () => service.get("/movies").then(res => res.data), 
  getOne: id => service.get(`/movies/${id}`).then(res => res.data),
  addOne: info => service.post("/movies", info).then(res => res.data),
  editOne: (id, info) => service.put(`/movies/${id}`, info).then(res => res.data),
  deleteOne: id => service.delete(`/movies/${id}`).then(res => res)
};

