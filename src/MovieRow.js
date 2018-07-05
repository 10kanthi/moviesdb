import React from 'react';


class MovieRow extends React.Component {

    viewMovie() {
    //   console.log("view more");
    //   console.log(this.props.movie.title);
    const url = "https://www.themoviedb.org/movie/" + this.props.movie.id;
    window.location.href = url;
    }


    render() {

        return <div className ="mainContainer">
            <table key={this.props.movie.id}>
                <tbody className="container_movies">
                <tr>
                    <td className="imgbox">
                    <img alt="poster" src={this.props.movie.poster_src}/>
                    </td>
                    <td className="infobox">
                    <h3>{this.props.movie.title}</h3>
                    <p>{this.props.movie.overview}</p>
                    <input className="btn" type="button" onClick={this.viewMovie.bind(this)} value="More"/>
                    </td>
                </tr>
                </tbody>
        </table>
       </div>
    }
}

export default MovieRow;