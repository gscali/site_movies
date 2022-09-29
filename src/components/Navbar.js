import React from "react";
import './Navbar.css'
import {getSearchMovies} from '../services/MovieServices';
import {useEffect, useState} from 'react'
import { Movie } from '../components/Movie';



export const Navbar = () => {

	// const [search, setSearch] = useState("")
	const [resultSearch, setResultSearch] = useState([])

	function handleChange(e) {
		let search = e.target.value;
		console.log('handleChange ->', search);
		getSearchMovies(search).then((res) => {
			setResultSearch(res.results)
			console.log(res.results)
		}).catch (error => {
			setResultSearch([]);
			console.log(error.name, error.message);
		});
	}

	useEffect(()=> {
		console.log('useEffect');
		// return () => {}
	}, [resultSearch])
	
	// if(resultSearch?.length > 0) {
		return (
				<div className="navbar">
					<h1 className="title">videoclub</h1>
					<input onChange={(e) => handleChange(e)} className="searchbar" placeholder="Rechercher un film, un réalisateur, un acteur ..."/>
					{resultSearch?.length &&
						<div className="recherche">
								{resultSearch.map((movie, i) => <Movie id={movie.id} key={i}/>)}
						</div>
					}
				</div>
	  )
	// }
	// else {
	
	// return (
	// 			  <div className="navbar">
	// 				<h1 className="title">videoclub</h1>
	// 				<input onChange={handleChange}className="searchbar" placeholder="Rechercher un film, un réalisateur, un acteur ..."/>
	// 				<div className="recherche"></div>
	// 			</div>
	//   )
	
	// } 
}


/* <div className="navbar">
				<h1 className="title">videoclub</h1>
				<input onChange={handleChange}className="searchbar" placeholder="Rechercher un film, un réalisateur, un acteur"/>
				<div className="recherche">
					{}
						
				</div>
			</div> */