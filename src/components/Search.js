import { useEffect, useState } from "react";
import SearchInput from "./SearchInput";
import { SearchIcon } from "@primer/octicons-react";
import SearchResults from "./SearchResults";
import MovieExpandedCard from "./MovieExpandedCard";

const API_KEY = "33f7982";

export default function Search({ watchedList, setWatchedList }) {
    const [query, setQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isMovieExpanded, setIsMovieExpanded] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState();

    useEffect(() => {
        if (query.trim() !== "" && query.length > 2) {
            fetchMovies(query);
        } else {
            setSearchResults([]);
        }
    }, [query]);

    const fetchMovies = async (searchQuery) => {
        const formattedQuery = encodeURIComponent(searchQuery.trim());
        setIsLoading(true);
        try {
            const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${formattedQuery}`);
            const data = await response.json();
            if (data.Response === "False") {
                throw new Error("Movie not found!");
            }
            setSearchResults(data.Search || []);
            setError("");
        } catch (error) {
            setError(error.message);
            setSearchResults([]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSearch = (e) => {
        setQuery(e.target.value);
        setIsMovieExpanded(false);
    };

    const fetchMovieDetail = async (id) => {
        setIsLoading(true);
        try {
            const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`);
            const data = await response.json();
            if (data.Response === "False") {
                throw new Error("Movie not found!");
            }
            setSelectedMovie(data);
            setError("");
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    const handleExpandMovie = (id) => {
        fetchMovieDetail(id);
        setIsMovieExpanded(true);
    };

    return (
        <div className='search'>
            <div className='search-input'>
                <SearchIcon size={16} fill='#8b949e' className='search-input-icon' />
                <SearchInput query={query} onChange={handleSearch} />
            </div>
            {isMovieExpanded ? (
                <MovieExpandedCard watchedList={watchedList} setWatchedList={setWatchedList} setIsMovieExpanded={setIsMovieExpanded} movie={selectedMovie} isLoading={isLoading} error={error} />
            ) : (
                <SearchResults setError={setError} setIsLoading={setIsLoading} setIsMovieExpanded={setIsMovieExpanded} setSelectedMovie={setSelectedMovie} query={query} isLoading={isLoading} error={error} searchResults={searchResults} handleExpandMovie={handleExpandMovie} />
            )}
        </div>
    )
}