const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/movies', component: MovieList },
    { path: '/movies/new', component: MovieNew },
    {
      path: '/movies/:id',
      component: MovieDetail,
    },
    {
      path: '/movies/:id/edit',
      component: MovieEdit,
    },
  ],
});

new Vue({
  el: '#app',
  router,
});
