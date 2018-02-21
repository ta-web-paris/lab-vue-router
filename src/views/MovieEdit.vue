<template>
  <div>
    <movie-form v-if="movie" :default-values="movie" @submit="saveMovie"></movie-form>
    <p v-else>Loading...</p>
  </div>
</template>


<script>
import api from '../api';
import MovieForm from '../components/MovieForm';

export default {
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

  components: {
    MovieForm,
  },
};
</script>
