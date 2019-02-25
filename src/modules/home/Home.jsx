import React, { Component } from "react";
import axios from "axios";
import ReactPaginate from 'react-paginate';

import { TMDB_API_KEY } from "../../config.js";

import TvList from "../tv-list/TvList.jsx";

import "../../styles.scss";
import "./Home.scss";

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
			tvshows: null,

			totalMovies: null,
			pageNumber: 1,

			sortBy: "popularity.desc",
			genres: null,
			selectedGenre: "",

			searchQuery: ""
		};

		this.handleSearch = this.handleSearch.bind(this);
		this.changePage = this.changePage.bind(this);
		this.handleSortChange = this.handleSortChange.bind(this);
		this.handleGenreChange = this.handleGenreChange.bind(this);
	}

	componentDidMount() {
		this.getTvShows();
		this.getGenres();
	}

	/**
     * gets the tv list from the API endpoint
     */
    async getTvShows() {
    	const { pageNumber, sortBy, selectedGenre } = this.state;

    	const tvshows = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${TMDB_API_KEY}&language=en-US&with_genres=${selectedGenre}&sort_by=${sortBy}&page=${pageNumber}`)

        this.setState({
            isLoading: false,
            tvshows: tvshows.data,
            totalMovies: tvshows.data.total_pages
        });
	}

	/**
     * gets the movie list from the API endpoint
     */
    async getGenres() {

    	const genres = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${TMDB_API_KEY}&language=en-US`)

        this.setState({
            genres: genres.data
        });
	}

    /**
     * gets the search resultsu from the API endpoint
     */
    async search() {

    	const { searchQuery, pageNumber } = this.state;
    	let searchTv;

    	if(searchQuery !== "") {
	    	searchTv = await axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${TMDB_API_KEY}&language=en-US&query=${searchQuery}&page=${pageNumber}`);
    	} else {
    		this.getTvShows();
    	}

    	this.setState({
            isLoading: false,
            tvshows: (searchQuery !== "") && searchTv.data,
            totalMovies: (searchQuery !== "") && searchTv.data.total_pages,
            pageNumber: 1
        });

    }

    /**
     * handles search onChange event
     * @param {string} event		event object
     */
    handleSearch(event) {
        this.setState({ searchQuery: event.target.value }, () => { 
        	this.search();
        });

        this.resetGenres();
        this.resetSort();
    }

    /**
	 * change current page of data
	 * @param {number} pageNumber	 page number to show
	 */
	changePage(pageNumber) {
		const { searchQuery } = this.state;

		this.setState({ 
			pageNumber: pageNumber.selected + 1
		}, () => {
			if(searchQuery === "") {
				this.getTvShows();
			} else {
				this.search();
			}
		});

		window.scrollTo(0, 0);
	}

	/**
     * handles changing of sort type
     * @param {object} event		event object
     */
    handleSortChange(event) {
        this.setState({ sortBy: event.target.value }, () => {
            this.getTvShows();
        });

        this.resetSearch();
    }

    /**
     * handles changing of genre
     * @param {object} event		event object
     */
    handleGenreChange(event) {
        this.setState({ selectedGenre: event.target.value }, () => {
            this.getTvShows();
        });

        this.resetSearch();
    }

    /**
     * resets search bar
     */
    resetSearch() {
    	this.setState({searchQuery: ""});
    }

    /**
     * resets genres
     */
    resetGenres() {
    	this.setState({selectedGenre: ""});
    }

    /**
     * resets sort
     */
    resetSort() {
    	this.setState({sortBy: "popularity.desc"});
    }

	render() {

		const { tvshows, searchQuery, totalMovies, sortBy, genres, selectedGenre } = this.state;

		return (
			<div className="home">
				<div className="header">
					<div>
						<h1>The TV Database</h1>
						<h4>Explore your favourite TV shows</h4>
					</div>

					<input placeholder="Search for a TV title..." className="search" type="text" value={searchQuery} onChange={this.handleSearch} />
				</div>

				<form className="toolbox">
					<div className="container">
						<div className="row">
							<div className="col">

								<div className="toolbox__group">

									<select className="sort" value={sortBy} onChange={this.handleSortChange}>
										<option value="popularity.desc">Popularity (Most to Least)</option>
										<option value="popularity.asc">Popularity (Least to Most)</option>
										<option value="first_air_date.desc">First Air Date (Newest to Oldest)</option>
										<option value="first_air_date.asc">First Air Date (Oldest to Newest)</option>
										<option value="vote_average.desc">Vote Average (Highest to Lowest)</option>
										<option value="vote_average.asc">Vote Average (Lowest to Highest)</option>
									</select>

									{genres &&
										<select value={selectedGenre} onChange={this.handleGenreChange}>
											<option value="">All Genres</option>	
											{genres.genres.map(genre => {
						        				return (
						        					<option value={genre.id} key={genre.id}>{genre.name}</option>
						        				);
						        			})}
										</select>
									}
								</div>
							</div>
						</div>
					</div>
				</form>

				<div className="container home__body">
					<div className="row">
						<div className="col">

							<div className="home__tagline">
								<p className="home__tagline-title">Search TV shows. Add to favourites. Watch trailers.</p>
								<p>Explore the next TV series to binge-watch!</p>
							</div>
						
							<TvList tvshows={tvshows}/>	
						</div>
					</div>
				</div>

				<div className="container">

					{tvshows && 
						<div className="row">
							<div className="col">
								{tvshows.length !== 0 &&
							        <ReactPaginate
							          previousLabel={'previous'}
							          nextLabel={'next'}
							          breakLabel={'...'}
							          breakClassName={'break-me'}
							          pageCount={totalMovies}
							          pageClassName={'pagination-item'}
							          marginPagesDisplayed={2}
							          pageRangeDisplayed={5}
							          onPageChange={this.changePage}
							          containerClassName={'pagination'}
							          subContainerClassName={'pages pagination'}
							          activeClassName={'page-active'}
							          previousLinkClassName={'page-prev'}
							          nextLinkClassName={'page-next'}
							        />
							  	}
							</div>
						</div>
					}
				</div>
			</div>
		);

	}
}

export default Home;