// 0. If using a module system (e.g. via vue-cli), import Vue and VueRouter
// and then call `Vue.use(VueRouter)`.

// 1. Define route components.
// These can be imported from other files
const Movie = {
  data() {
    return {
      movie: [],
    };
  },

  template: `
  <div>
  <div v-if="Movie">
    <h1 class="title">{{movie.title}}</h1>
      <p class="subtitle">
      Poster: {{movie.poster}}
      <br>
      Synopsis:{{movie.synopsis}}
      <br>
      Genres:{{movie.genres}}
      </p>
   </div>
   <div v-else>
      Loading...
   </div>
  </div>`,

  created() {
    api.getOne().then(movie => {
      this.movie = movie;
    })
  }
}
const Movies = {
  data() {
    return {
      movies: [],
    };
  },

  template: `
  <div>
  <h1 class="title">Movies</h1>
   <ul>
   <li v-for="movie in movies">
   <router-link :to="'/' + movie.id">
    {{movie.title}}
   </li>
  </ul>
  </div>`,

  created() {
    api.getAll().then(movies => {
      this.movies = movies;
    })
  }
}
const Home = {
  template: '<div>Home</div>'
}

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [{
    path: '/movies',
    component: Movies
  },
  {
    path: '/',
    component: Home
  }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  mode: "hash",
  routes: [{
      path: "/",
      component: Home
    },
    {
      path: "/movies",
      component: Movies
    }
  ] // short for `routes: routes`
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app = new Vue({
  el: "#app",
  router
}).$mount('#app')

// Now the app has started!
