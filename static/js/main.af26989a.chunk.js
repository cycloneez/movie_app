(window.webpackJsonpmovie_app=window.webpackJsonpmovie_app||[]).push([[0],{31:function(e,t,n){e.exports=n.p+"static/media/noPosterSmall.87a0eb6a.png"},46:function(e,t,n){e.exports=n(78)},78:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(37),l=n.n(i),o=n(9),u=n(10),c=n(12),s=n(11),p=n(13),m=n(18),d=n(16),g=n(6),f=n.n(g),v=n(15),h=n(2),b=n(1),E=n(14),x=n.n(E);function y(){var e=Object(h.a)(["\n  margin-top: 25px;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 125px);\n  grid-gap: 25px;\n"]);return y=function(){return e},e}function j(){var e=Object(h.a)(["\n  font-size: 14px;\n  font-weight: 600;\n"]);return j=function(){return e},e}function O(){var e=Object(h.a)(["\n  :not(:last-child) {\n    margin-bottom: 50px;\n  }\n"]);return O=function(){return e},e}var _=b.default.div(O()),w=b.default.span(j()),k=b.default.div(y()),S=function(e){var t=e.title,n=e.children;return r.a.createElement(_,null,r.a.createElement(w,null,t),r.a.createElement(k,null,n))};function T(){var e=Object(h.a)(["\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  font-size: 28px;\n  margin-top: 20px;\n"]);return T=function(){return e},e}var R=b.default.div(T()),U=function(){return r.a.createElement(R,null,r.a.createElement("span",{role:"img","aria-label":"Loading"},"\u23f0"))};function z(){var e=Object(h.a)(["\n  color: ",";\n"]);return z=function(){return e},e}function C(){var e=Object(h.a)(["\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n"]);return C=function(){return e},e}var M=b.default.div(C()),I=b.default.span(z(),function(e){return e.color}),P=function(e){var t=e.text,n=e.color;return r.a.createElement(M,null,r.a.createElement(I,{color:n},t))};function D(){var e=Object(h.a)(["\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.5);\n"]);return D=function(){return e},e}function F(){var e=Object(h.a)(["\n  display: block;\n  margin-bottom: 3px;\n"]);return F=function(){return e},e}function A(){var e=Object(h.a)(["\n  margin-bottom: 5px;\n  position: relative;\n  &:hover {\n    "," {\n      opacity: 0.3;\n    }\n    "," {\n      opacity: 1;\n    }\n  }\n"]);return A=function(){return e},e}function B(){var e=Object(h.a)(["\n  bottom: 5px;\n  right: 5px;\n  position: absolute;\n  opacity: 0;\n  transition: opacity 0.1s linear;\n"]);return B=function(){return e},e}function N(){var e=Object(h.a)(["\n  background-image: url(",");\n  height: 180px;\n  background-size: cover;\n  border-radius: 4px;\n  background-position: center center;\n  transition: opacity 0.1s linear;\n"]);return N=function(){return e},e}function V(){var e=Object(h.a)(["\n  font-size: 12px;\n"]);return V=function(){return e},e}var L=b.default.div(V()),q=b.default.div(N(),function(e){return e.bgUrl}),J=b.default.span(B()),G=b.default.div(A(),q,J),H=b.default.span(F()),K=b.default.span(D()),Q=function(e){var t=e.id,a=e.imageUrl,i=e.title,l=e.rating,o=e.year,u=e.isMovie,c=void 0!==u&&u;return r.a.createElement(m.b,{to:c?"/movie/".concat(t):"/show/".concat(t)},r.a.createElement(L,null,r.a.createElement(G,null,r.a.createElement(q,{bgUrl:a?"https://image.tmdb.org/t/p/w300".concat(a):n(31)}),r.a.createElement(J,null,r.a.createElement("span",{role:"img","aria-label":"rating"},"\u2b50\ufe0f")," ",l,"/10")),r.a.createElement(H,null,i.length>18?"".concat(i.substring(0,18),"..."):i),r.a.createElement(K,null,o)))};function W(){var e=Object(h.a)(["\n  padding: 20px;\n"]);return W=function(){return e},e}var X=b.default.div(W()),Y=function(e){var t=e.nowPlaying,n=e.popular,a=e.upcoming,i=e.loading,l=e.error;return r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,null,r.a.createElement("title",null,"\u6620\u753b\u30a2\u30d7\u30ea")),i?r.a.createElement(U,null):r.a.createElement(X,null,r.a.createElement(x.a,null,r.a.createElement("title",null,"\u6620\u753b\u30a2\u30d7\u30ea")),t&&t.length>0&&r.a.createElement(S,{title:"\u4e0a\u6620\u4e2d"},t.map(function(e){return r.a.createElement(Q,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_title,rating:e.vote_average,year:e.release_date.substring(0,4),isMovie:!0})})),a&&a.length>0&&r.a.createElement(S,{title:"\u516c\u958b\u4e88\u5b9a"},a.map(function(e){return r.a.createElement(Q,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_title,rating:e.vote_average,year:e.release_date.substring(0,4),isMovie:!0})})),n&&n.length>0&&r.a.createElement(S,{title:"\u4eba\u6c17"},n.map(function(e){return r.a.createElement(Q,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_title,rating:e.vote_average,year:e.release_date.substring(0,4),isMovie:!0})})),l&&r.a.createElement(P,{color:"#e74c3c",text:l})))},Z=n(42),$=n.n(Z).a.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"33e0b924182172ba4521b386bc689611",language:"en-US"}}),ee={nowPlaying:function(){return $.get("movie/now_playing")},upcoming:function(){return $.get("movie/upcoming")},popular:function(){return $.get("movie/popular")},movieDetail:function(e){return $.get("movie/".concat(e),{params:{append_to_response:"videos"}})},search:function(e){return $.get("search/movie",{params:{query:encodeURIComponent(e)}})}},te={topRated:function(){return $.get("tv/top_rated")},popular:function(){return $.get("tv/popular")},airingToday:function(){return $.get("tv/airing_today")},showDetail:function(e){return $.get("tv/".concat(e),{params:{append_to_response:"videos"}})},search:function(e){return $.get("search/tv",{params:{query:encodeURIComponent(e)}})}},ne=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={nowPlaying:null,upcoming:null,popular:null,error:null,loading:!0},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(f.a.mark(function e(){var t,n,a,r,i,l;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ee.nowPlaying();case 3:return t=e.sent,n=t.data.results,e.next=7,ee.upcoming();case 7:return a=e.sent,r=a.data.results,e.next=11,ee.popular();case 11:i=e.sent,l=i.data.results,this.setState({nowPlaying:n,upcoming:r,popular:l}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"Can't find movie information."});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}},e,this,[[0,16,19,22]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.nowPlaying,n=e.upcoming,a=e.popular,i=e.error,l=e.loading;return r.a.createElement(Y,{nowPlaying:t,upcoming:n,popular:a,error:i,loading:l})}}]),t}(r.a.Component);function ae(){var e=Object(h.a)(["\n  padding: 20px;\n"]);return ae=function(){return e},e}var re=b.default.div(ae()),ie=function(e){var t=e.topRated,n=e.popular,a=e.airingToday,i=e.loading,l=e.error;return r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,null,r.a.createElement("title",null,"\u6620\u753b\u30a2\u30d7\u30ea")),i?r.a.createElement(U,null):r.a.createElement(re,null,t&&t.length>0&&r.a.createElement(S,{title:"Top Rated Shows"},t.map(function(e){return r.a.createElement(Q,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_name,rating:e.vote_average,year:e.first_air_date.substring(0,4)})})),n&&n.length>0&&r.a.createElement(S,{title:"Popular Shows"},n.map(function(e){return r.a.createElement(Q,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_name,rating:e.vote_average,year:e.first_air_date.substring(0,4)})})),a&&a.length>0&&r.a.createElement(S,{title:"Airing Today"},a.map(function(e){return r.a.createElement(Q,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_name,rating:e.vote_average,year:e.first_air_date.substring(0,4)})})),l&&r.a.createElement(P,{color:"#e74c3c",text:l})))},le=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={topRated:null,popular:null,airingToday:null,loading:!0,error:null},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(f.a.mark(function e(){var t,n,a,r,i,l;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,te.topRated();case 3:return t=e.sent,n=t.data.results,e.next=7,te.popular();case 7:return a=e.sent,r=a.data.results,e.next=11,te.airingToday();case 11:i=e.sent,l=i.data.results,this.setState({topRated:n,popular:r,airingToday:l}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"Can't find TV information."});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}},e,this,[[0,16,19,22]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.topRated,n=e.popular,a=e.airingToday,i=e.loading,l=e.error;return r.a.createElement(ie,{topRated:t,popular:n,airingToday:a,loading:i,error:l})}}]),t}(r.a.Component);function oe(){var e=Object(h.a)(["\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return oe=function(){return e},e}function ue(){var e=Object(h.a)(["\n  width: 80px;\n  height: 50px;\n  text-align: center;\n  border-bottom: 3px solid\n    ",";\n  transition: border-bottom 0.5s ease-in-out;\n"]);return ue=function(){return e},e}function ce(){var e=Object(h.a)(["\n  display: flex;\n"]);return ce=function(){return e},e}function se(){var e=Object(h.a)(["\n  color: white;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  background-color: rgba(20, 20, 20, 0.8);\n  z-index: 10;\n  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);\n"]);return se=function(){return e},e}var pe=b.default.header(se()),me=b.default.ul(ce()),de=b.default.li(ue(),function(e){return e.current?"#3498db":"transparent"}),ge=Object(b.default)(m.b)(oe()),fe=Object(d.g)(function(e){var t=e.location.pathname;return r.a.createElement(pe,null,r.a.createElement(me,null,r.a.createElement(de,{current:"/"===t},r.a.createElement(ge,{to:"/"},"\u6620\u753b")),r.a.createElement(de,{current:"/tv"===t},r.a.createElement(ge,{to:"/tv"},"TV")),r.a.createElement(de,{current:"/search"===t},r.a.createElement(ge,{to:"/search"},"\u691c\u7d22"))))});function ve(){var e=Object(h.a)(["\n  all: unset;\n  font-size: 28px;\n  width: 100%;\n"]);return ve=function(){return e},e}function he(){var e=Object(h.a)(["\n  margin-bottom: 50px;\n  width: 100%;\n"]);return he=function(){return e},e}function be(){var e=Object(h.a)(["\n  padding: 20px;\n"]);return be=function(){return e},e}var Ee=b.default.div(be()),xe=b.default.form(he()),ye=b.default.input(ve()),je=function(e){var t=e.movieResults,n=e.tvResults,a=e.loading,i=e.searchTerm,l=e.handleSubmit,o=e.error,u=e.updateTerm;return r.a.createElement(Ee,null,r.a.createElement(x.a,null,r.a.createElement("title",null,"\u6620\u753b\u30a2\u30d7\u30ea")),r.a.createElement(xe,{onSubmit:l},r.a.createElement(ye,{placeholder:"\u6620\u753b\u3001TV\u756a\u7d44\u306e\u691c\u7d22",value:i,onChange:u})),a?r.a.createElement(U,null):r.a.createElement(r.a.Fragment,null,t&&t.length>0&&r.a.createElement(S,{title:"\u6620\u753b\u3000\u7d50\u679c"},t.map(function(e){return r.a.createElement(Q,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_title,rating:e.vote_average,year:e.release_date.substring(0,4),isMovie:!0})})),n&&n.length>0&&r.a.createElement(S,{title:"TV\u756a\u7d44\u3000\u7d50\u679c"},n.map(function(e){return r.a.createElement(Q,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_name,rating:e.vote_average,year:e.first_air_date.substring(0,4)})})),o&&r.a.createElement(P,{color:"#e74c3c",text:o}),n&&t&&0===n.length&&0===t.length&&r.a.createElement(P,{text:"\u691c\u7d22\u7d50\u679c\u304c\u5b58\u5728\u3057\u307e\u305b\u3093\u3002",color:"#95a5a6"})))},Oe=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={movieResults:null,tvResults:null,searchTerm:"",loading:!1,error:null},n.handleSubmit=function(e){e.preventDefault(),""!==n.state.searchTerm&&n.searchByTerm()},n.updateTerm=function(e){var t=e.target.value;n.setState({searchTerm:t})},n.searchByTerm=Object(v.a)(f.a.mark(function e(){var t,a,r,i,l;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state.searchTerm,n.setState({loading:!0}),e.prev=2,e.next=5,ee.search(t);case 5:return a=e.sent,r=a.data.results,e.next=9,te.search(t);case 9:i=e.sent,l=i.data.results,n.setState({movieResults:r,tvResults:l}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),n.setState({error:"Can't find results."});case 17:return e.prev=17,n.setState({loading:!1}),e.finish(17);case 20:case"end":return e.stop()}},e,null,[[2,14,17,20]])})),n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.movieResults,n=e.tvResults,a=e.searchTerm,i=e.loading,l=e.error;return r.a.createElement(je,{movieResults:t,tvResults:n,loading:i,error:l,searchTerm:a,handleSubmit:this.handleSubmit,updateTerm:this.updateTerm})}}]),t}(r.a.Component);function _e(){var e=Object(h.a)(["\n  font-size: 12px;\n  opacity: 0.7;\n  line-height: 1.5;\n  width: 50%;\n"]);return _e=function(){return e},e}function we(){var e=Object(h.a)(["\n  margin: 0 10px;\n"]);return we=function(){return e},e}function ke(){var e=Object(h.a)([""]);return ke=function(){return e},e}function Se(){var e=Object(h.a)(["\n  margin: 20px 0;\n"]);return Se=function(){return e},e}function Te(){var e=Object(h.a)(["\n  font-size: 32px;\n"]);return Te=function(){return e},e}function Re(){var e=Object(h.a)(["\n  width: 70%;\n  margin-left: 10px;\n"]);return Re=function(){return e},e}function Ue(){var e=Object(h.a)(["\n  width: 30%;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  height: 100%;\n  border-radius: 5px;\n"]);return Ue=function(){return e},e}function ze(){var e=Object(h.a)(["\n  display: flex;\n  width: 100%;\n  position: relative;\n  z-index: 1;\n  height: 100%;\n"]);return ze=function(){return e},e}function Ce(){var e=Object(h.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  filter: blur(3px);\n  opacity: 0.5;\n  z-index: 0;\n"]);return Ce=function(){return e},e}function Me(){var e=Object(h.a)(["\n  height: calc(100vh - 50px);\n  width: 100%;\n  position: relative;\n  padding: 50px;\n"]);return Me=function(){return e},e}var Ie=b.default.div(Me()),Pe=b.default.div(Ce(),function(e){return e.bgImage}),De=b.default.div(ze()),Fe=b.default.div(Ue(),function(e){return e.bgImage}),Ae=b.default.div(Re()),Be=b.default.h3(Te()),Ne=b.default.div(Se()),Ve=b.default.span(ke()),Le=b.default.span(we()),qe=b.default.p(_e()),Je=function(e){var t=e.result,a=e.loading;e.error;return a?r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,null,r.a.createElement("title",null,"Loading | Nomflix")),r.a.createElement(U,null)):r.a.createElement(Ie,null,r.a.createElement(x.a,null,r.a.createElement("title",null,t.original_title?t.original_title:t.original_name," ")),r.a.createElement(Pe,{bgImage:"https://image.tmdb.org/t/p/original".concat(t.backdrop_path)}),r.a.createElement(De,null,r.a.createElement(Fe,{bgImage:t.poster_path?"https://image.tmdb.org/t/p/original".concat(t.poster_path):n(31)}),r.a.createElement(Ae,null,r.a.createElement(Be,null,t.original_title?t.original_title:t.original_name),r.a.createElement(Ne,null,r.a.createElement(Ve,null,t.release_date?t.release_date.substring(0,4):t.first_air_date.substring(0,4)),r.a.createElement(Le,null,"\u2022"),r.a.createElement(Ve,null,t.runtime?t.runtime:t.episode_run_time[0]," min"),r.a.createElement(Le,null,"\u2022"),r.a.createElement(Ve,null,t.genres&&t.genres.map(function(e,n){return n===t.genres.length-1?e.name:"".concat(e.name," / ")}))),r.a.createElement(qe,null,t.overview))))},Ge=function(e){function t(e){var n;Object(o.a)(this,t),n=Object(c.a)(this,Object(s.a)(t).call(this,e));var a=e.location.pathname;return n.state={result:null,error:null,loading:!0,isMovie:a.includes("/movie/")},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(f.a.mark(function e(){var t,n,a,r,i,l,o,u;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,n=t.match.params.id,a=t.history.push,r=this.state.isMovie,i=parseInt(n),!isNaN(i)){e.next=5;break}return e.abrupt("return",a("/"));case 5:if(l=null,e.prev=6,!r){e.next=14;break}return e.next=10,ee.movieDetail(i);case 10:o=e.sent,l=o.data,e.next=18;break;case 14:return e.next=16,te.showDetail(i);case 16:u=e.sent,l=u.data;case 18:e.next=24;break;case 20:e.prev=20,e.t0=e.catch(6),this.setState({error:"Can't find anything."}),console.log("catch error",n);case 24:return e.prev=24,this.setState({loading:!1,result:l}),e.finish(24);case 27:case"end":return e.stop()}},e,this,[[6,20,24,27]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.result,n=e.error,a=e.loading;return console.log("result : ",t),r.a.createElement(Je,{result:t,error:n,loading:a})}}]),t}(r.a.Component),He=function(){return r.a.createElement(m.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(fe,null),r.a.createElement(d.d,null,r.a.createElement(d.b,{path:"/",exact:!0,component:ne}),r.a.createElement(d.b,{path:"/tv",component:le}),r.a.createElement(d.b,{path:"/search",component:Oe}),r.a.createElement(d.b,{path:"/movie/:id",component:Ge}),r.a.createElement(d.b,{path:"/show/:id",component:Ge}),r.a.createElement(d.a,{from:"*",to:"/"}))))},Ke=n(43),Qe=n.n(Ke);function We(){var e=Object(h.a)(["\n    ",";\n    a{\n        text-decoration:none;\n        color:inherit;\n    }\n    *{\n        box-sizing:border-box;\n    }\n    body{\n        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n        font-size:12px;\n        background-color:rgba(20, 20, 20, 1);\n        color:white;\n        padding-top:50px;\n    }\n"]);return We=function(){return e},e}var Xe=Object(b.createGlobalStyle)(We(),Qe.a),Ye=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(He,null),r.a.createElement(Xe,null))}}]),t}(a.Component);l.a.render(r.a.createElement(Ye,null),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.af26989a.chunk.js.map