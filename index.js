const Home = {
  template: `
    <div>
      <h1>Welcoooome</h1>

    </div>
    `
};

const Movies = {
  data() {
    return {
      movies: []
    };
  },
  template: `
    <div>
      <h1>Movies</h1>
      <router-link :to"/movies/new">Add a movie</router-link>
      <ul>
        <li v-for="movie in movies" v-if="movie">
        <router-link :to"'/movies/'+movie.id">{{movie.title}}</router-link>
        </li>
      </ul>
    </div>
  `,
  created() {
    api.getAll().then(movies => {
      this.movies = movies;
    });
  }
};

const Movie = {
  data() {
    return {
      movie: null
    };
  },
  template: `
  <div>
    <MovieCard :movie="movie" v-if="movie"></MovieCard>
  </div>
  `,
  created() {
    api.getOne().then(movies => {
      this.movie = movie;
    });
  }
};

const NewMovie = {
  template: `
  <div>
    <MovieForm></MovieForm>
  </div>
  `
};

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/movies",
      component: Movies
    },
    {
      path: "/movies/new",
      component: NewMovie
    },
    {
      path: "/movies/:id",
      component: Movie
    }
  ]
});

const app = new Vue({
  el: "#app",
  router
});
