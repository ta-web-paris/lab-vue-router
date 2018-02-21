<template>
  <form @submit.prevent="submit()">
		<input v-model="movie.title" placeholder="Title"> <br>
    <b-field label="Select a date" v-model="movie.year">
        <b-datepicker
            placeholder="Click to select..."
            icon="calendar-today">
        </b-datepicker>
    </b-field>
		<input v-model="movie.director" placeholder="Director"> <br>
		<input v-model="movie.synopsis" placeholder="Synopsis"> <br>
		<input v-model="movie.poster" placeholder="Poster URL"> <br>
		<input type="submit">
	</form>
</template>


<script>
export default {
  props: {
    defaultValues: Object,
  },

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
};
</script>
