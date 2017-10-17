/*
GOAL: train on router & ajax
Use the json-server to generate an API automatically. Take the data from the Cinema billboard exercise
	Routes:
Homepage (/): Landing page
/movies: List movie
/movies/:id See movie info
/movies/new Add movie
/movies/:id/edit: Edit movie
		Iterations:
Make /movies and Homepage with a button to /movies
List all movies (just the titles)
Add a navbar with a link to Homepage at the top of every page
Specific movie pages and add a link to the movie names in /movies
/movies/new route and a button in Homepage to access it
Add a delete button to /movies/:id. Redirect to /movies on success.
/movies/:id/edit. Redirect to /movies/:id.
      BONUSES: Improve user experience by:
Doing form validation
Asking for confirmation on delete
Have a success message on delete AFTER redirection
Add styling & cool animations
	Tell them that they don’t need more components than routes (although they can use more)
	Provide a component with a form to edit/create movies
Optional prop to pass down a default movie
Firing a submit event when clicking on the submit button
	Provide a component to display a movie
Prop to pass down a movie
	Provide a navbar component
Slot to pass down the content of the navbar
	Provide a skeleton for api.js
All the functions defined but without their body
*/


const Welcome = {
	template: '<div>Welcome</div>'

}

const Movie = {
	template: '<div>Moviiiiiiieeeeee</div>'

}

const AllMovies = Vue.extend({
	template: `<div> 
		<ul>
			<li v-for="movie in movies">
				<router-link :to="{ path: '/'}">	
				{{ movie.title }}
				</router-link>
			</li>
		</ul>

	 </div>`,
	data() {
	 	return {
			movies: []
		}
	},
	methods: {
		getAllMovies() {
			api.getAll().then(listOfMovies => {
				listOfMovies.forEach( (movie) => {
					this.movies.push( { title: movie.title, id: movie.id } )
				})
			})
		}
	},
	created() {
		this.getAllMovies();
	}

})

const SubmitMovieInfo = {
	template: '<div>Add a new one</div>'

}


const router = new VueRouter({
  routes: [
	  { path: '/', component: Welcome },
	  { path: '/movies', component: AllMovies },
	  { path: '/movies/new', component: SubmitMovieInfo },
	  { path: '/movies/:id/edit', component: SubmitMovieInfo },
	  { path: '/movies/:id', component: Movie }
  ]
})

const vm = new Vue({
  router,
  data: {
  	movies: []
  }
}).$mount('#app')
