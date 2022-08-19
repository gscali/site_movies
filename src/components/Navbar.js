import React from "react";
import './Navbar.css'
import {getSearchMovies} from '../services/MovieServices';
import {useEffect, useState} from 'react'
import { Movie } from '../components/Movie';



export const Navbar = () => {

	const [search, setsearch] = useState([])
	const [resultSearch, setResultSearch] = useState([])

	function handleChange(e) {
		setsearch(e.target.value)
		console.log(e.target.value);
		
	}

	useEffect(()=> {
		getSearchMovies(search).then((res) => {
			setResultSearch(res.results)
			console.log(res.results)
		}).catch (error => {
			setResultSearch([]);
			console.log(error.name, error.message);
		})
		return () => {}
	}, [search])


  return (	
	  		<div className="navbar">
				<h1 className="title">videoclub</h1>
				<input onChange={handleChange}className="searchbar" placeholder="Rechercher un film, un réalisateur, un acteur"/>
				<div className="recherche">
					{resultSearch &&
						{resultSearch.map((movie, i) => 
							{
								return <Movie id={movie.id} key={i}/> )
							}
						}
					}
						
				</div>
			</div>
  )
}
