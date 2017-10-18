const router = new VueRouter ({
  mode: 'history',
  routes: [
    {path: '/', component: Home },
    {path: '/movies', component: MoviesList },
    {path: '/movies/:id', component: MoviePage }
  ]
})

const app = new Vue({
  el: "#app",
  router
})
