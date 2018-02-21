<template>
  <div>
    <router-link :to="'/movies/' + myMovie.id + '/edit'">Edit</router-link>
    <button @click="deleteMovie">Delete movie</button>
    <movie-card :movie="myMovie"></movie-card>
  </div>
</template>

<script>
import api from '../api';

export default {
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
</script>
