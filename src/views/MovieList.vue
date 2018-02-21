<template>
  <div>
    <h1>Movies</h1>
    <ul>
      <li v-for="movie in movies">
        <router-link :to="'/movies/' + movie.id">{{ movie.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import api from '../api';

export default {
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
</script>

