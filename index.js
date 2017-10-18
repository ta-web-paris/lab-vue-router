const Home = {
  data() {
    return {
      movies: []
    };
  },
  template: `
  <div>
    <h1 class="title">Movies</h1>
    <router-link :to="'/add'">
      Add a new movie to the collection
    </router-link>
    <ul>
      <li v-for="movie in movies">
        <router-link :to="'/' + movie.id">
            <movie-card :movie="movie" ></movie-card>
        </router-link>
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

const MovieDetail = {
  data() {
    return {
      movie: null
    };
  },
  template: `
  <div>
    <div v-if="movie" >
    <h1 class="title">{{movie.title}}</h1>
    <img :src="movie.poster">
    <p> <strong>Director: </strong>{{movie.director}}</p>
    <p> <strong>Year: </strong> {{movie.year}}</p>
    <p> <strong>Actors: </strong></p>
    <ul>
      <li v-for="actor in movie.actors"> {{actor}}   </li>
    </ul>
    <p> <strong>Genres: </strong></p>
    <ul>
      <li v-for="genre in movie.genres"> {{genre}}   </li>
    </ul>
    <p> <strong>Synopsis: </strong> {{movie.synopsis}}</p>
    </div>
  </div>
  `,

  created() {
    api.getOne(this.$route.params.id).then(movie => {
      this.movie = movie;
    });
  }
};

const AddMovie = {
  data() {
    return {
      movie: null
    };
  },
  template: `
  <div>
    <movie-form ></movie-form>
  </div>
  `
};

const routes = [
  { path: "/", component: Home },
  { path: "/add", component: AddMovie },
  { path: "/:id", component: MovieDetail }
];

const router = new VueRouter({
  mode: "history",
  routes
});

new Vue({
  el: "#app",
  router
});
