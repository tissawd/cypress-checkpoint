import MovieCard from './MovieCard';


function MovieList({movies}){
    return(
        <div>
        {movies === undefined ? <img src="https://m.media-amazon.com/images/M/MV5BMTg2MzI1MTg3OF5BMl5BanBnXkFtZTgwNTU3NDA2MTI@._V1_SX300.jpg"></img> : movies.map((movie)=>{
            return(
                <MovieCard photo={movie.poster} />
            )
        })}
        </div>
    )
}
export default MovieList;