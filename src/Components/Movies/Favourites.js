import React, { useEffect, useState } from "react"

const genreids = {
    28: 'Action', 12: 'Adventure', 16: 'Animation', 35: 'Comedy', 80: 'Crime', 99: 'Documentary', 18: 'Drama', 10751: 'Family', 14: 'Fantasy', 36: 'History',
    27: 'Horror', 10402: 'Music', 9648: 'Mystery', 10749: 'Romance', 878: 'Sci-Fi', 10770: 'TV', 53: 'Thriller', 10752: 'War', 37: 'Western'
};

function Favourites() {
    let [movies, setMovies] = useState([])
    const [genre, setGenre] = useState([])
    const [filterArr, setFilterArr] = useState([])
    const [currgen, setCurrgen] = useState('All Genres')

    // fetching the favourites from localstorage
    useEffect(() => {
        let data = JSON.parse(localStorage.getItem("movies") || "[]")
        // data from localstorage
        // console.log(data);

        // saving all the genres to render the list of genres
        let temp = [];
        data.length > 0 && data.forEach((movieObj) => {
            if (!temp.includes(genreids[movieObj.genre_ids[0]])) {
                temp.push(genreids[movieObj.genre_ids[0]])
            }
        })
        temp = temp.slice(1)
        temp.unshift('All Genres')
        if (data) {
            setMovies(data)
        }
        setGenre(temp)
        setMovies(data)
        // console.log(data);
    }, [])
    // console.log(movies);

    const removeFav = (id) => {
        movies = movies.filter((movie) => movie.id !== id)
        // console.log(movies);
        // to remove the movie from localstorage also
        localStorage.setItem("movies", JSON.stringify(movies))
        // localStorage.removeItem(id)
        setMovies(movies)
    }

    // filtering the movies according to currgenre
    useEffect(() => {
        let filterArr = [];
        if (currgen === 'All Genres') {
            // filterArr = movies;
            // we can not delete the movies to filter out current genre movies
            // if all gennres then all movies should be shown
            setFilterArr(movies)
        } else {
            filterArr = movies.filter((movieObj) => genreids[movieObj.genre_ids[0]] === currgen)
            setFilterArr(filterArr)
        }
    }, [currgen, movies])

    // console.log(filterArr);
    return (
        <div className='row'>
            <div className='col-lg-3'>
                <ul className="list-group" style={{ marginLeft: '20px' }}>
                    {
                        genre.map((value, idx) => (
                            <li key={idx} className="list-group-item"
                                style={{
                                    background: value === currgen ? 'lightblue' : '',
                                    fontWeight: value === currgen ? 'bolder' : ''
                                }}
                                onClick={() => setCurrgen(value)}
                            >
                                {value}
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className='col-lg-9'>
                <div className="row d-flex">
                    <input type="text" className="form-control col" />
                    <input type="number" className="form-control col" />
                </div>

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Image</th>
                            <th scope="col">title </th>
                            <th scope="col">Genre </th>
                            <th scope="col">Popularity</th>
                            <th scope="col">rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filterArr.length > 0 && filterArr?.map((movie, idx) => (
                                (movie.original_title && movie.backdrop_path) &&
                                <tr key={movie.id}>
                                    <td> <img src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} style={{ width: '100px' }} alt="movie-img" />
                                    </td>
                                    <td>{movie.original_title}</td>
                                    <td>{genreids[movie.genre_ids[0]]}</td>
                                    <td>{movie.popularity}</td>
                                    <td>{movie.vote_average}</td>
                                    <td>
                                        <button className='btn btn-danger bg-danger' onClick={() => removeFav(movie.id)}>delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default React.memo(Favourites)
