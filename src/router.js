import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import MovieList from './views/MovieList.vue';
import MovieDetails from './views/MovieDetails.vue';
import MovieEdit from './views/MovieEdit.vue';
import MovieNew from './views/MovieNew.vue';

Vue.use(Router);

// module.exports = new Router({
export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/movies',
      component: MovieList,
    },
    {
      path: '/movies/new',
      component: MovieNew,
    },
    {
      path: '/movies/:id',
      component: MovieDetails,
    },
    {
      path: '/movies/:id/edit',
      component: MovieEdit,
    },
  ],
});
