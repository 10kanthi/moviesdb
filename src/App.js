import React, { Component } from 'react';
import './App.css';
import movieRow from './MovieRow';
import MovieRow from './MovieRow';
import $ from 'jquery';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {};

    this.performSearch("the");
  }

   performSearch(searchTerm) {
      console.log("Perform search using movie db");
      // async call to fetch data from internet

      const urlString = "https://api.themoviedb.org/3/search/movie?&api_key=b32493eaf8f81c981a000c90acde7a6b&query="+searchTerm ;
      $.ajax({
        url: urlString,
        success: (searchResults) => {
          console.log("Fetched data successfully");
          // console.log(searchResults);
          const results = searchResults.results;

          var movieRows = [];

          results.forEach(movie => {
            // console.log(movie.poster_path);
            movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path;
            const movieRow = <MovieRow  key={movie.id} movie={movie}/>
            movieRows.push(movieRow);
          });
         
      
          this.setState({rows: movieRows});

        },
        error: (xhr, status, err) => {
          console.log("Failed to fetch data");
        }
      });
    }

    searchChangeHandler(e) {
      console.log(e.target.value);
      const boundObject = this;
      const searchTerm = e.target.value;
      boundObject.performSearch(searchTerm);

    }
  

  render() {
    return (
      <div className="App">

        <table className="titleBar">
          <tbody>
            <tr>
              <td> <img className="logo" width="45" src="logo.png" alt ="logo icon"/> </td>
              <td> <h2>Movies Search</h2></td>
            </tr>
          </tbody>
        </table>

        <input id="searchBar" onChange={this.searchChangeHandler.bind(this)} placeholder="Enter search term"/>
          {this.state.rows}

      </div>
    );
  }
}

export default App;
