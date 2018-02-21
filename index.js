const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: AllMovies
    }
  ]
});

const vm = new Vue({
  router,
  el: "#app",
  data: {
    movies: api.getAll()
  }
});
