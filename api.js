const service = axios.create({
	baseURL: "http://localhost:3000"
});

const api = {
	getAll: () => {
		return service
		.get()
		.then(response => {
		return response.data;
		})
		.catch(err => {
			console.error(err);
			return null;
		});
	}, // Return instead a promise containing all the movies,
	getOne: id => {
	return service
		.get(id)
		.then(response => {
			return response.data;
		})
		.catch(err => {
			console.error(err);
			return null;
		});
	}, // Return instead a promise containing one movie,
	addOne: info => {
	return service
		.post(info)
		.then(response => {
			return response.data;
		})
		.catch(err => {
			console.error(err);
			return null;
		});
	}, // Make the request to add a movie and return a promise containing the added movie,
	editOne: (id, info) => {
	return service
		.put(id, info)
		.then(response => {
			return response.data;
		})
		.catch(err => {
			console.error(err);
			return null;
		});
	}, // Make the request to edit a movie and return a promise containing the edited movie,
	deleteOne: id => {
		return service
		.delete(id)
		.then(response => {
		return response.data;
		})
		.catch(err => {
			console.error(err);
			return null;
		});
	} // Make the request to delete a movie
};
