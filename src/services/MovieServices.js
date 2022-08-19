export const API_KEY = "c0a8284e5f292f9166fb5e88fcb39b0e" 

export async function getJson(method, url) {
	const response = await fetch(url, {
		method
	});
	// if (!(await response.status.ok))
	// {
	// 	console.log("not working: " + url)	
	// 	return []
	// }
	let res = await response.json();
	// console.log('hello - >', res);
	return res;
}

export async function getTrendingVideo() {
	return await getJson("GET", `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`);
}

export async function getBestRatedMovies() {
	return await getJson("GET", `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`);
}

export async function getLatestVideo() {
	return await getJson("GET", `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
}

export async function getMoviesDetails(id) {
	return await getJson("GET", `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`);
}

export async function getSearchMovies(search) {
	return await getJson("GET", `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}&page=1`);
}