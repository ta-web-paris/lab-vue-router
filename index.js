const routes = [
  { path: "/", component: HomePage },
  { path: "/movies", component: Movies },
  { path: "/movies/:id", component: MovieCard },
  { path: "/movies/new", component: MovieForm }
];
const router = new VueRouter({
  routes
});

const app = new Vue({
  el: "#app",
  router
});
