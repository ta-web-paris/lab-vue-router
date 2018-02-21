<template>
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img :src="movie.poster">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">{{ movie.title }}</p>
          <p class="subtitle is-6">{{ movie.year }} by {{ movie.director }}</p>
        </div>
      </div>

      <div class="content">
        {{ movie.synopsis }}
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    movie: Object,
  },
};
</script>
