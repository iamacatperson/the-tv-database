import React, { Component } from "react";
import { withRouter } from "react-router";
import "./TvList.scss";

class TvList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    /**
     * handles redirection when a tv show is clicked
     * @param {string} movieId		movie id
     */
    handleItemClick(movieId) {
    	const { history } = this.props;

    	history.push({
		  pathname: '/tv-detail',
		  search: `?query=${movieId}`
		})

    }

    render() {

    	const { tvshows } = this.props;

        if(tvshows) {
            return (
                <div className="movie-list">
                    <div className="container">
                        <div className="row">
                            {tvshows.results.map(movie => {

                                let isFavourite = false;

                                if (localStorage.hasOwnProperty("favourites")) {
                                    const favouritesLocal = JSON.parse(localStorage.getItem('favourites'));

                                    isFavourite = favouritesLocal.find(id => {
                                        return id === movie.id.toString()
                                    });
                                }

                                return (
                                    <div className="col-4 col-sm-4 col-md-3 col-lg-3" key={movie.id}>
                                        <div className="movie-list__item" onClick={() => this.handleItemClick(movie.id)}>
                                            <div className="movie-list__image">{movie.poster_path ? <img src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.name} /> : <img src={`https://via.placeholder.com/500x735.png?text=${movie.name}`} alt={movie.name} />}</div>
                                                {isFavourite && <span className="movie-list__favourited"></span>}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )
        } else {
            return null;
        }

        
    }
}

export default withRouter(TvList);