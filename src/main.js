import Vue from 'vue';
import Buefy from 'buefy';
import 'buefy/lib/buefy.css';

// const Vue = require('vue')
import App from './App.vue';
// const App = require('./App.vue')
import router from './router';
import MovieCard from './components/MovieCard.vue';

Vue.component('MovieCard', MovieCard);

Vue.use(Buefy);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
