import EmptyState from "./EmptyState";
import EmptyStateGithub from "../assets/img/empty-state-github.svg";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import SearchMovieCard from "./SearchMovieCard";

export default function SearchResults({ searchResults, isLoading, error, query, handleExpandMovie }) {
    return (
        <div className='search-results'>
            {query.length <= 2 ? (
                <EmptyState img={EmptyStateGithub} heading="Search for a movie!" subheading="Search for movies, series and more." />
            ) : (
                isLoading ? <Loader /> : error ? <ErrorMessage error={error} /> : (
                    <ul className='search-results-list'>
                        {searchResults.map((movie) => (
                            <li onClick={() => handleExpandMovie(movie.imdbID)} key={movie.imdbID} className='search-results-list-item'>
                                <SearchMovieCard movie={movie} />
                            </li>
                        ))}
                    </ul>
                )
            )}
        </div>
    )
}