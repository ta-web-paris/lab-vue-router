Vue.component('MovieCard', {
  props: {
    movie: Object,
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

Vue.component('MovieForm', {
  props: {
    defaultValues: Object,
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
      movie: {},
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
      this.$emit('submit', this.movieCopy());
    },
  },
});

const Home = {
  template: `
  <div>
    <h1>Home</h1>
    <router-link to="/movies">Movies</router-link>
    <router-link to="/movies/new">New Movie</router-link>
  </div>
  `,
};

const MovieList = {
  template: `
  <div>
    <h1>Movies</h1>
    <ul>
      <li v-for="movie in movies">
        <router-link :to="'/movies/' + movie.id">{{ movie.title }}</router-link>
      </li>
    </ul>
  </div>
  `,

  data() {
    return {
      movies: [],
    };
  },

  created() {
    api.getAll().then(movies => {
      this.movies = movies;
    });
  },
};

const MovieDetail = {
  template: `
<div>
<router-link :to="'/movies/' + myMovie.id + '/edit'">Edit</router-link>
<button @click="deleteMovie">Delete movie</button>
<movie-card :movie="myMovie"></movie-card>
</div>
  `,

  data() {
    return {
      myMovie: {},
    };
  },

  created() {
    api.getOne(this.$route.params.id).then(movie => {
      this.myMovie = movie;
    });
  },

  methods: {
    deleteMovie() {
      api.deleteOne(this.$route.params.id).then(() => {
        this.$router.push('/movies');
      });
    },
  },
};

const MovieNew = {
  template: `
  <div>
    <movie-form @submit="saveMovie"></movie-form>
  </div>
  `,

  methods: {
    saveMovie(movie) {
      api.addOne(movie).then(movie => {
        this.$router.push(`/movies/${movie.id}`);
      });
    },
  },
};

const MovieEdit = {
  template: `
  <div>
    <movie-form v-if="movie" :default-values="movie" @submit="saveMovie"></movie-form>
    <p v-else>Loading...</p>
  </div>
  `,

  data() {
    return {
      movie: null,
    };
  },

  created() {
    api.getOne(this.$route.params.id).then(movie => {
      this.movie = movie;
    });
  },

  methods: {
    saveMovie(movie) {
      api.editOne(this.$route.params.id, movie).then(() => {
        this.$router.push(`/movies/${this.$route.params.id}`);
      });
    },
  },
};
