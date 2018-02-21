const Home = {
  template: `
  <div>
  <h1>Hello Movie App!</h1>
  <router-link to="/movies">Go to movies</router-link>
  </div>
  `
};

const Movies = {
  template: `
  <div>
<h1>Movies list</h1>
<router-link to="/">Go to Home</router-link>
<ul>
  <li v-for="movie in movies">
  <router-link :to="'/movies/' + movie.id">{{movie.title}}</router-link> 
  </li>
</ul>
</div>
`,
  data() {
    return {
      movies: []
    };
  },
  created() {
    api.getAll().then(movies => (this.movies = movies));
  }
};

const MoviePage = {
  template: `
  <div>
  <router-link to="/movies">Go to Movies</router-link>
  <h1>{{this.movie.title}}</h1>
  <MovieCard :movie="this.movie"></MovieCard>
</div>
  `,
  data() {
    return {
      movie: {}
    };
  },
  created() {
    api.getOne(this.$route.params.id).then(movie => (this.movie = movie));
  }
};

const router = new VueRouter({
  routes: [
    { path: "/", component: Home },
    { path: "/movies", component: Movies },
    { path: "/movies/:id", component: MoviePage }
  ]
});

const vm = new Vue({
  el: "#app",
  router
});
