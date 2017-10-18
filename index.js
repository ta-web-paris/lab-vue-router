const Home = { template: `<div><h2>Welcome!!!!!</h2>
	</div>` };

const Movies = {
	data() {
		return {
			movies: [],
		};
	},
	template: `
	<div>
		<h2 class="title">Movies :)</h2>
		<ul>
			<li v-for="movie in movies">
				<router-link :to="'/' + movie.id">
					{{ movie.title }}
				</router-link>
			</li>
		</ul>
	</div>
	`,

	created() {
		api.getAll().then(movies => {
			this.movies = movies;
		});
	},
};

const Movie = {
	data() {
		return {
			movie: null,
		};
	},
	template: `
	<div>
		<div v-if="movie">
			<h1 class="title">{{ movie.name }}</h1>
			<movie-card :movie="movie"></movie-card>
		</div>
		<div v-else>
			Loading...
		</div>
	</div>
	`,
	created() {
		api.getOne(this.$route.params.id).then(movie => {
			if (movie) {
				this.movie = movie;
			} else {
				this.$router.push('/');
			}
		});
	},
};

const router = new VueRouter({
	mode: 'hash',
	routes: [
		{ path: '/welcome', component: Home }, 
		{ path: '/', component: Movies },
		{ path: '/:id', component: Movie }
		],
});

new Vue({
	el: '#app',
	router,
});
