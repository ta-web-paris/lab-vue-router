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
	`
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
