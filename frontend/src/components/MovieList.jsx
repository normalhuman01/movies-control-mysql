import { useEffect, useState } from 'react';

const MovieList = () => {

    const [movies, setMovies] = useState([])
    
    useEffect(async () => {
        const url = "http://localhost:5000/movies";
        const res = await fetch(url);
        setMovies(await res.json());
    }, [])
    
    return(
            <table className="striped">
                <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Tipo</th>
                    <th>Episodios</th>
                    <th>Episodio actual</th>
                    <th>Visto finalmente</th>
                </tr>
                </thead>

                <tbody>
                {movies.map(movie => {
                    let type = movie.type === 0 ? 'Serie' : 'Película';
                    let formatDate = (movie.last_view).split('T', 1)

                    return(
                        <tr key={movie.id}>
                            <td>{movie.name}</td>
                            <td>{type}</td>
                            <td>{movie.total_ep}</td>
                            <td>{movie.atual_ep}</td>
                            <td>{formatDate}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
    )
}

export default MovieList;
