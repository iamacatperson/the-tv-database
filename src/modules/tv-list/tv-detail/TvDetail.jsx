import React, { Component, Fragment } from "react";
import { withRouter } from "react-router";

import axios from "axios";
import moment from "moment";
import qs from "qs";

import { TMDB_API_KEY } from "../../../config.js";

import "./TvDetail.scss";

class TvDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tvDetail: null,
            tvId: null,

            season: "1",
            seasonDetail: null,

            favourites: [],
            favourited: false
        };

        this.handleSeasonChange = this.handleSeasonChange.bind(this);
        this.toggleFavourite = this.toggleFavourite.bind(this);
        this.checkIfFavourited = this.checkIfFavourited.bind(this);
    }

    componentDidMount() {
        this.getTvId();
        this.setUpLocalStorage();
    }

    /**
     * sets-up local storage
     */
    setUpLocalStorage() {
    	if (localStorage.hasOwnProperty("favourites")) {
            let favouritesLocal = JSON.parse(localStorage.getItem('favourites'));
            this.setState({ favourites: favouritesLocal }, () => {
                this.setState({ favourited: this.checkIfFavourited() });
            });
        } else {
            localStorage.setItem("favourites", JSON.stringify([]));
        }
    }

    /**
     * checks if the current TV show is favourited or not
     * @returns {boolean} hasTvId		whether favourites has the current tvId
     */
    checkIfFavourited() {
        const { favourites, tvId } = this.state;
        let hasTvId = null;

        if (favourites.length !== 0) {
            hasTvId = favourites.find(id => {
                return id === tvId;
            });
        }

        return hasTvId;
    }

    /**
     * gets the movie detail from the API endpoint
     */
    getTvId() {
        const { history: { location } } = this.props;

        const query = qs.parse(location.search, {
            ignoreQueryPrefix: true
        });

        this.setState({ tvId: query.query }, () => {
            this.getTvDetail();
            this.getSeason();
        })
    }

    /**
     * gets the TV detail from the API endpoint
     */
    async getTvDetail() {
        const { tvId } = this.state;

        const showDetail = await axios.get(`https://api.themoviedb.org/3/tv/${tvId}?api_key=${TMDB_API_KEY}&language=en-US&append_to_response=videos,credits`);

        this.setState({
            isLoading: false,
            tvDetail: showDetail.data
        }, () => {
            const { tvDetail } = this.state;
            document.title = `The TV Database - ${tvDetail.name}`;
        });
    }

    /**
     * gets the TV seasons from the API endpoint
     */
    async getSeason() {
        const { season, tvId } = this.state;

        const showSeason = await axios.get(`https://api.themoviedb.org/3/tv/${tvId}/season/${season}?api_key=${TMDB_API_KEY}`);

        this.setState({
            seasonDetail: showSeason.data
        });
    }

    /**
     * handles changing of season
     * @param {object} event		event object
     */
    handleSeasonChange(event) {
        this.setState({ season: event.target.value }, () => {
            this.getSeason();
        });
    }

    /**
     * toggles favourite
     */
    toggleFavourite() {
        const { tvId, favourites } = this.state;

        if (this.checkIfFavourited()) {
            this.setState({
                favourites: favourites.filter(id => {
                    return id !== tvId
                }),
                favourited: false
            }, () => {
                localStorage.setItem("favourites", JSON.stringify(this.state.favourites));
            });
        } else {
            this.setState({ favourites: [...this.state.favourites, tvId], favourited: true }, () => {
                localStorage.setItem("favourites", JSON.stringify(this.state.favourites));
            });

        }
    }

    render() {
        const { tvDetail, season, seasonDetail, favourited } = this.state;

        if (tvDetail && seasonDetail) {

            return (
                <div className="movie-detail">
	            	<div className="movie-detail__header" style={{backgroundImage: `url(http://image.tmdb.org/t/p/w1280${tvDetail.backdrop_path})`}}>
	            		<div className="movie-detail__header-overlay"></div>
	            		<h1>{tvDetail.name}</h1>
	            		<h3>
	            			{tvDetail.number_of_seasons} Season(s), {tvDetail.number_of_episodes} Episodes
	            		</h3>
	            		<h2>
	            			{tvDetail.genres.map(genre => {
	            				return (
	            					<span key={genre.id}>{genre.name}</span>
	            				);
	            			})}
	            		</h2>
					</div>

					<div className="container">
						<div className="movie-detail__body">
							<div className="row">
								<div className="col-12 col-sm-4 col-lg-4">
									
									<div className="movie-detail__sidebar">
									
                                        <div className="movie-detail__sidebar-group">		
    										<img src={`http://image.tmdb.org/t/p/w342${tvDetail.poster_path}`} alt={tvDetail.name} />
                                            <p className="movie-detail__status">{tvDetail.status}</p>    
										</div>

										<button className={`movie-detail__button movie-detail__button--toggle-favourites ${favourited && " movie-detail__button--toggle-favourites--favourited"}`} onClick={this.toggleFavourite}>{favourited ? "- Remove from Favourites" : "+ Add to Favourites"}</button>

										<p><strong>Created by</strong> {tvDetail.created_by.map(creator => {
											return (<span key={creator.id}>{creator.name} </span>);
										})}<br />
										<strong>Each episode lasts about</strong> {tvDetail.episode_run_time} mins.
										<br />
										<strong>Originally from</strong> {tvDetail.origin_country}<br />
										<strong>First aired on</strong> {moment(tvDetail.first_air_date).format("MMM Do YYYY")}</p>

										<p>Average Rating<br />
										<span className="movie-detail__rating">{tvDetail.vote_average} / 10</span></p>

                                        {tvDetail.videos.results.length > 0 &&
                                            <Fragment>    
                                                <p>Trailers & Related Videos</p>

                                                <div>
                                                    {tvDetail.videos.results.map(video => {
                                                        return (
                                                            <div className="movie-detail__iframe-wrapper" key={video.key}>
                                                                <iframe key={video.key} src={`https://www.youtube.com/embed/${video.key}`}
                                                                    frameBorder='0'
                                                                    allow='autoplay; encrypted-media'
                                                                    allowFullScreen
                                                                    title='video'
                                                                />
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </Fragment>
                                        }

                                        {tvDetail.credits.cast.length > 0 &&
                                            <Fragment>    
                                                <p>Cast and Characters</p> 

                                                <ul className="movie-detail__cast">
                                                    {tvDetail.credits.cast.map(person => {
                                                        return (
                                                            <li key={person.id}><strong>{person.name}</strong> <span>as</span> {person.character}</li>
                                                        );
                                                    })}
                                                </ul>
                                            </Fragment>
                                        }
									</div>

								</div>

								<div className="col-12 col-sm-8 col-lg-8">
									
									<div className="movie-detail__content">

										<p className="movie-detail__synopsis">{tvDetail.overview}</p>

										{(tvDetail.seasons.length > 1) && 
											<div>
												<select className="movie-detail__season-selector" value={season} onChange={this.handleSeasonChange}>
													{tvDetail.seasons.map(season => {
							            				return (
							            					<option value={season.season_number} key={season.season_number}>{season.name}</option>
							            				);
							            			})}
												</select>
											</div>
										}

										<h3 className="movie-detail__ep-title">Episodes</h3>

										<ul className="movie-detail__episodes">
											{seasonDetail.episodes.map(episode => {
												return (
													<li className="movie-detail__episode" key={episode.id}>
														<div>
															<div className="movie-detail__episode-thumbnail" style={{backgroundImage: `url(http://image.tmdb.org/t/p/w185${episode.still_path})`}}> <div className="movie-detail__episode-number">{episode.episode_number}</div></div>
														</div>
														<div>
															<h4>{episode.name}</h4>
															{episode.vote_average > 0 && 
                                                                <p className="movie-detail__episode-rating">Average Rating: {episode.vote_average}</p>
                                                            }
															<p>{episode.overview !== "" ? episode.overview : "No description at the moment."}</p>
														</div>
													</li>
												);
											})}
										</ul>

									</div>

								</div>
							</div>
						</div>
					</div>
				</div>
            );
        } else {
            return null;
        }
    }
}

export default withRouter(TvDetail);