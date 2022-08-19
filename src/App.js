import './App.css';
import { getTrendingVideo, getLatestVideo, getBestRatedMovies } from './services/MovieServices';
import {useEffect, useState} from 'react'
import { Movie } from './components/Movie';
import { Navbar } from './components/Navbar';

function App() {

	const [bestRatedMovies, setBestRatedMovies] = useState([])
	const [trendingMovies, setTrendingMovies] = useState ([])

	useEffect(() => {
		getBestRatedMovies().then((res) => {
			// console.log(res)
			setBestRatedMovies(res.results);
			// console.log('movies in res.results ->', res.results);
			// console.log('movies in state -> ', movies);
		}).catch(error => {
			// setmovies([]);
			console.log('-- There is an error --');
			console.log(error.name, error.message);
		})
		return () => {}
	}, [])

	useEffect(() => {
		getTrendingVideo().then((res)=> {
			setTrendingMovies(res.results)
			//console.log(res.results)
		}).catch(error => {
			setTrendingMovies([]);
			console.log(error.name, error.message);
		})
		return () => {}

	}, [])

	return 	<div>
		
				<Navbar/>				
				<div className='container'><h2>À l'affiche cette semaine</h2>
					<div className='principal'>
						{trendingMovies.map((movie, i) => <Movie id={movie.id} key={i} isTrending={true}/> )}
					</div>
				</div>
				<div className='container'><h2>Les films les mieux notés</h2>
					<div className='principal'>
						{bestRatedMovies.map((movie, i) => <Movie id={movie.id} key={i} isTrending={false}/> )}
					</div>
				</div>
				
			</div>
		
			

}

export default App;

/*

<div><input type='search'/> {search.map((movie) =>
				<Movie search={movie.search}/>)}</div>

				*/