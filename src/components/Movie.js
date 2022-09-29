import React from 'react'
import { useState, useEffect } from 'react'
import { getMoviesDetails } from '../services/MovieServices';
import './Movie.css'


export const Movie = ({id, isTrending}) => {

	const [movie, setmovie] = useState(null);

	useEffect(() => {
		getMoviesDetails(id).then((film) => {
			console.log(film);
			setmovie(film)});
	}, [id]);

	return ( movie ?
		<div className='second'>
			<img className='affiche' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt='poster' />
			<h3> {movie.title}</h3>
			{isTrending ? <p>{Math.floor(movie.runtime / 60) !== 0 ? `${Math.floor(movie.runtime / 60)}h ` : ''}{movie.runtime % 60}m</p> : <div className='percent'>
				<progress className='progress' max='100' value={movie.vote_average * 10}/>
				<p className='chiffre'> {Math.floor(movie.vote_average * 10)} % </p>
			</div>}
		</div> : false
	)
}
