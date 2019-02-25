(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(e,t,a){e.exports=a(76)},67:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},74:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(26),i=a.n(s),l=a(8),o=a(9),c=a(11),u=a(10),m=a(12),v=a(80),h=a(78),d=a(5),p=a.n(d),g=a(13),f=a(6),E=a(14),b=a.n(E),y=a(27),_=a.n(y),N="".concat("70758649562a241bfb1fb1feb2b56d7b"),k=a(77),S=(a(67),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"handleItemClick",value:function(e){this.props.history.push({pathname:"/tv-detail",search:"?query=".concat(e)})}},{key:"render",value:function(){var e=this,t=this.props.tvshows;return t?r.a.createElement("div",{className:"movie-list"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},t.results.map(function(t){var a=!1;localStorage.hasOwnProperty("favourites")&&(a=JSON.parse(localStorage.getItem("favourites")).find(function(e){return e===t.id.toString()}));return r.a.createElement("div",{className:"col-6 col-sm-4 col-md-3 col-lg-3",key:t.id},r.a.createElement("div",{className:"movie-list__item",onClick:function(){return e.handleItemClick(t.id)}},r.a.createElement("div",{className:"movie-list__image"},t.poster_path?r.a.createElement("img",{src:"http://image.tmdb.org/t/p/w500".concat(t.poster_path),alt:t.name}):r.a.createElement("img",{src:"https://via.placeholder.com/500x735.png?text=".concat(t.name),alt:t.name})),a&&r.a.createElement("span",{className:"movie-list__favourited"})))})))):null}}]),t}(n.Component)),w=Object(k.a)(S),O=(a(69),a(70),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={isLoading:!0,tvshows:null,totalMovies:null,pageNumber:1,sortBy:"popularity.desc",genres:null,selectedGenre:"",searchQuery:""},a.handleSearch=a.handleSearch.bind(Object(f.a)(a)),a.changePage=a.changePage.bind(Object(f.a)(a)),a.handleSortChange=a.handleSortChange.bind(Object(f.a)(a)),a.handleGenreChange=a.handleGenreChange.bind(Object(f.a)(a)),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getTvShows(),this.getGenres()}},{key:"getTvShows",value:function(){var e=Object(g.a)(p.a.mark(function e(){var t,a,n,r,s;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state,a=t.pageNumber,n=t.sortBy,r=t.selectedGenre,e.next=3,b.a.get("https://api.themoviedb.org/3/discover/tv?api_key=".concat(N,"&language=en-US&with_genres=").concat(r,"&sort_by=").concat(n,"&page=").concat(a));case 3:s=e.sent,this.setState({isLoading:!1,tvshows:s.data,totalMovies:s.data.total_pages});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getGenres",value:function(){var e=Object(g.a)(p.a.mark(function e(){var t;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://api.themoviedb.org/3/genre/movie/list?api_key=".concat(N,"&language=en-US"));case 2:t=e.sent,this.setState({genres:t.data});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"search",value:function(){var e=Object(g.a)(p.a.mark(function e(){var t,a,n,r;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.searchQuery,n=t.pageNumber,""===a){e.next=7;break}return e.next=4,b.a.get("https://api.themoviedb.org/3/search/tv?api_key=".concat(N,"&language=en-US&query=").concat(a,"&page=").concat(n));case 4:r=e.sent,e.next=8;break;case 7:this.getTvShows();case 8:this.setState({isLoading:!1,tvshows:""!==a&&r.data,totalMovies:""!==a&&r.data.total_pages,pageNumber:1});case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"handleSearch",value:function(e){var t=this;this.setState({searchQuery:e.target.value},function(){t.search()}),this.resetGenres(),this.resetSort()}},{key:"changePage",value:function(e){var t=this,a=this.state.searchQuery;this.setState({pageNumber:e.selected+1},function(){""===a?t.getTvShows():t.search()}),window.scrollTo(0,0)}},{key:"handleSortChange",value:function(e){var t=this;this.setState({sortBy:e.target.value},function(){t.getTvShows()}),this.resetSearch()}},{key:"handleGenreChange",value:function(e){var t=this;this.setState({selectedGenre:e.target.value},function(){t.getTvShows()}),this.resetSearch()}},{key:"resetSearch",value:function(){this.setState({searchQuery:""})}},{key:"resetGenres",value:function(){this.setState({selectedGenre:""})}},{key:"resetSort",value:function(){this.setState({sortBy:"popularity.desc"})}},{key:"render",value:function(){var e=this.state,t=e.tvshows,a=e.searchQuery,n=e.totalMovies,s=e.sortBy,i=e.genres,l=e.selectedGenre;return r.a.createElement("div",{className:"home"},r.a.createElement("div",{className:"header"},r.a.createElement("div",null,r.a.createElement("h1",null,"The TV Database"),r.a.createElement("h4",null,"Explore your favourite TV shows")),r.a.createElement("input",{placeholder:"Search for a TV title...",className:"search",type:"text",value:a,onChange:this.handleSearch})),r.a.createElement("form",{className:"toolbox"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"toolbox__group"},r.a.createElement("select",{className:"sort",value:s,onChange:this.handleSortChange},r.a.createElement("option",{value:"popularity.desc"},"Popularity (Most to Least)"),r.a.createElement("option",{value:"popularity.asc"},"Popularity (Least to Most)"),r.a.createElement("option",{value:"first_air_date.desc"},"First Air Date (Newest to Oldest)"),r.a.createElement("option",{value:"first_air_date.asc"},"First Air Date (Oldest to Newest)"),r.a.createElement("option",{value:"vote_average.desc"},"Vote Average (Highest to Lowest)"),r.a.createElement("option",{value:"vote_average.asc"},"Vote Average (Lowest to Highest)")),i&&r.a.createElement("select",{value:l,onChange:this.handleGenreChange},r.a.createElement("option",{value:""},"All Genres"),i.genres.map(function(e){return r.a.createElement("option",{value:e.id,key:e.id},e.name)}))))))),r.a.createElement("div",{className:"container home__body"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"home__tagline"},r.a.createElement("p",{className:"home__tagline-title"},"Search TV shows. Add to favourites. Watch trailers."),r.a.createElement("p",null,"Explore the next TV series to binge-watch!")),r.a.createElement(w,{tvshows:t})))),r.a.createElement("div",{className:"container"},t&&r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},0!==t.length&&r.a.createElement(_.a,{previousLabel:"previous",nextLabel:"next",breakLabel:"...",breakClassName:"break-me",pageCount:n,pageClassName:"pagination-item",marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:this.changePage,containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"page-active",previousLinkClassName:"page-prev",nextLinkClassName:"page-next"})))))}}]),t}(n.Component)),C=a(32),j=a(30),x=a.n(j),I=a(31),T=a.n(I),D=(a(74),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={tvDetail:null,tvId:null,season:"1",seasonDetail:null,favourites:[],favourited:!1},a.handleSeasonChange=a.handleSeasonChange.bind(Object(f.a)(a)),a.toggleFavourite=a.toggleFavourite.bind(Object(f.a)(a)),a.checkIfFavourited=a.checkIfFavourited.bind(Object(f.a)(a)),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getTvId(),this.setUpLocalStorage()}},{key:"setUpLocalStorage",value:function(){var e=this;if(localStorage.hasOwnProperty("favourites")){var t=JSON.parse(localStorage.getItem("favourites"));this.setState({favourites:t},function(){e.setState({favourited:e.checkIfFavourited()})})}else localStorage.setItem("favourites",JSON.stringify([]))}},{key:"checkIfFavourited",value:function(){var e=this.state,t=e.favourites,a=e.tvId,n=null;return 0!==t.length&&(n=t.find(function(e){return e===a})),n}},{key:"getTvId",value:function(){var e=this,t=this.props.history.location,a=T.a.parse(t.search,{ignoreQueryPrefix:!0});this.setState({tvId:a.query},function(){e.getTvDetail(),e.getSeason()})}},{key:"getTvDetail",value:function(){var e=Object(g.a)(p.a.mark(function e(){var t,a,n=this;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.tvId,e.next=3,b.a.get("https://api.themoviedb.org/3/tv/".concat(t,"?api_key=").concat(N,"&language=en-US&append_to_response=videos,credits"));case 3:a=e.sent,this.setState({isLoading:!1,tvDetail:a.data},function(){var e=n.state.tvDetail;document.title="The TV Database - ".concat(e.name)});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getSeason",value:function(){var e=Object(g.a)(p.a.mark(function e(){var t,a,n,r;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state,a=t.season,n=t.tvId,e.next=3,b.a.get("https://api.themoviedb.org/3/tv/".concat(n,"/season/").concat(a,"?api_key=").concat(N));case 3:r=e.sent,this.setState({seasonDetail:r.data});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"handleSeasonChange",value:function(e){var t=this;this.setState({season:e.target.value},function(){t.getSeason()})}},{key:"toggleFavourite",value:function(){var e=this,t=this.state,a=t.tvId,n=t.favourites;this.checkIfFavourited()?this.setState({favourites:n.filter(function(e){return e!==a}),favourited:!1},function(){localStorage.setItem("favourites",JSON.stringify(e.state.favourites))}):this.setState({favourites:[].concat(Object(C.a)(this.state.favourites),[a]),favourited:!0},function(){localStorage.setItem("favourites",JSON.stringify(e.state.favourites))})}},{key:"render",value:function(){var e=this.state,t=e.tvDetail,a=e.season,s=e.seasonDetail,i=e.favourited;return t&&s?r.a.createElement("div",{className:"movie-detail"},r.a.createElement("div",{className:"movie-detail__header",style:{backgroundImage:"url(http://image.tmdb.org/t/p/w1280".concat(t.backdrop_path,")")}},r.a.createElement("div",{className:"movie-detail__header-overlay"}),r.a.createElement("h1",null,t.name),r.a.createElement("h3",null,t.number_of_seasons," Season(s), ",t.number_of_episodes," Episodes"),r.a.createElement("h2",null,t.genres.map(function(e){return r.a.createElement("span",{key:e.id},e.name)}))),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"movie-detail__body"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-sm-4 col-lg-4"},r.a.createElement("div",{className:"movie-detail__sidebar"},r.a.createElement("div",{className:"movie-detail__sidebar-group"},r.a.createElement("img",{src:"http://image.tmdb.org/t/p/w342".concat(t.poster_path),alt:t.name}),r.a.createElement("p",{className:"movie-detail__status"},t.status)),r.a.createElement("button",{className:"movie-detail__button movie-detail__button--toggle-favourites ".concat(i&&" movie-detail__button--toggle-favourites--favourited"),onClick:this.toggleFavourite},i?"- Remove from Favourites":"+ Add to Favourites"),r.a.createElement("p",null,r.a.createElement("strong",null,"Created by")," ",t.created_by.map(function(e){return r.a.createElement("span",{key:e.id},e.name," ")}),r.a.createElement("br",null),r.a.createElement("strong",null,"Each episode lasts about")," ",t.episode_run_time," mins.",r.a.createElement("br",null),r.a.createElement("strong",null,"Originally from")," ",t.origin_country,r.a.createElement("br",null),r.a.createElement("strong",null,"First aired on")," ",x()(t.first_air_date).format("MMM Do YYYY")),r.a.createElement("p",null,"Average Rating",r.a.createElement("br",null),r.a.createElement("span",{className:"movie-detail__rating"},t.vote_average," / 10")),t.videos.results.length>0&&r.a.createElement(n.Fragment,null,r.a.createElement("p",null,"Trailers & Related Videos"),r.a.createElement("div",null,t.videos.results.map(function(e){return r.a.createElement("div",{className:"movie-detail__iframe-wrapper",key:e.key},r.a.createElement("iframe",{key:e.key,src:"https://www.youtube.com/embed/".concat(e.key),frameBorder:"0",allow:"autoplay; encrypted-media",allowFullScreen:!0,title:"video"}))}))),t.credits.cast.length>0&&r.a.createElement(n.Fragment,null,r.a.createElement("p",null,"Cast and Characters"),r.a.createElement("ul",{className:"movie-detail__cast"},t.credits.cast.map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("strong",null,e.name)," ",r.a.createElement("span",null,"as")," ",e.character)}))))),r.a.createElement("div",{className:"col-12 col-sm-8 col-lg-8"},r.a.createElement("div",{className:"movie-detail__content"},r.a.createElement("p",{className:"movie-detail__synopsis"},t.overview),t.seasons.length>1&&r.a.createElement("div",null,r.a.createElement("select",{className:"movie-detail__season-selector",value:a,onChange:this.handleSeasonChange},t.seasons.map(function(e){return r.a.createElement("option",{value:e.season_number,key:e.season_number},e.name)}))),r.a.createElement("h3",{className:"movie-detail__ep-title"},"Episodes"),r.a.createElement("ul",{className:"movie-detail__episodes"},s.episodes.map(function(e){return r.a.createElement("li",{className:"movie-detail__episode",key:e.id},r.a.createElement("div",null,r.a.createElement("div",{className:"movie-detail__episode-thumbnail",style:{backgroundImage:"url(http://image.tmdb.org/t/p/w185".concat(e.still_path,")")}}," ",r.a.createElement("div",{className:"movie-detail__episode-number"},e.episode_number))),r.a.createElement("div",null,r.a.createElement("h4",null,e.name),e.vote_average>0&&r.a.createElement("p",{className:"movie-detail__episode-rating"},"Average Rating: ",e.vote_average),r.a.createElement("p",null,""!==e.overview?e.overview:"No description at the moment.")))})))))))):null}}]),t}(n.Component)),F=Object(k.a)(D),L=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(v.a,null,r.a.createElement(h.a,{exact:!0,component:O,path:"/"}),r.a.createElement(h.a,{exact:!0,component:F,path:"/tv-detail"}))}}]),t}(n.Component),G=(a(75),a(79));i.a.render(r.a.createElement(function(){return r.a.createElement(G.a,null,r.a.createElement(L,null))},null),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.33ad30ba.chunk.js.map