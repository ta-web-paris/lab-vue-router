const Home = {
  template: `
  <div>
  <h1>Hello</h1>

  <a href="movies">View all movies</a>
  <a href="movies/new">Add a movie</a>
  </div>
  `
};

const MoviesList = {
  data() {
    return {
      movies: []
    };
  }, // need to fix the <router-link> in the following template:
  template: `
  <div>
  <h1>Movies List</h1>
  <ul>
    <li v-for="singleMovie in movies"><router-link to="movies/:id"> {{ singleMovie.title }} </router-link></li>
  </ul>
  </div>
  `,
  created() {
    api.getAll().then(movies => {
      this.movies = movies;
    });
  }
};

const MoviePage = {
  data () {
    return {
      movie: null,
    }
  },
  template: `
  <div>
    <movie-card> </movie-card>
  </div>
  `,
  created() {
    api.getAll(this.$route.params.id).then(movie => {
      this.movie = movie;
    });
  }
};

Vue.component("MovieCard", {
  props: {
    movie: Object
  },
  template: `
	  	<section>
		    <h5> {{movie.title}} </h5>
		    <p> {{movie.year}} </p>
		    <p> {{movie.director}} </p>
		    <p> {{movie.synopsis}} </p>
		    <img :src="movie.poster" alt="poster" height="500px">
  		</section>
	`,
});

Vue.component("MovieForm", {
  props: {
    defaultValues: Object
  },
  template: `
	<form @submit.prevent="submit()">
		<input v-model="movie.title" placeholder="Title"> <br>
		<input v-model="movie.year" placeholder="Year"> <br>
		<input v-model="movie.director" placeholder="Director"> <br>
		<input v-model="movie.synopsis" placeholder="Synopsis"> <br>
		<input v-model="movie.poster" placeholder="Poster URL"> <br>
		<input type="submit">
	</form>
	`,
  data() {
    return {
      movie: {}
    };
  },
  mounted() {
    this.populateForm();
  },
  methods: {
    populateForm() {
      this.movie = Object.assign({}, this.defaultValues || {});
    },
    movieCopy() {
      return Object.assign({}, this.movie);
    },
    submit() {
      this.$emit("submit", this.movieCopy());
    }
  }
});
