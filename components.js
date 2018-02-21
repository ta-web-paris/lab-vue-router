const HomePage = Vue.component("HomePage", {
  template: `
  <div>
   <h1>Welcome</h1>
   <router-link to="/movies/">Movies</router-link>
   </div>
	`
});
const Movies = Vue.component("Movies", {
  data() {
    return {
      movies: []
    };
  },
  template: `
  <div>
   <h1>Movies List</h1>
   <router-link to="/">Go back to Homepage</router-link>
   <ul>
   <li v-for="movie in movies" >
   <router-link :to="'/movies/' +movie.id ">{{movie.title}}</router-link>
   
   </li></ul>
   </div>
  `,
  created() {
    api.getAll().then(movies => {
      this.movies = movies;
    });
  }
});

const MovieCard = Vue.component("MovieCard", {
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
  created() {
    api.getOne(this.$route.params.id).then(movie => {
      this.movie = movie;
    });
  }
});

const MovieForm = Vue.component("MovieForm", {
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
  created() {
    api.addOne(newMovie).then(movie => {
      this.movie = movie;
    });
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
