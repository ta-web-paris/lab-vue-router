<template>
  <div>
    <movie-form @submit="saveMovie"></movie-form>
  </div>  
</template>


<script>
import MovieForm from '../components/MovieForm';
import api from '../api';

export default {
  methods: {
    saveMovie(movie) {
      api.addOne(movie).then(movie => {
        this.$router.push(`/movies/${movie.id}`);
      });
    },
  },

  components: { MovieForm },
};
</script>
