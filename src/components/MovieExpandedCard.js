import { useState } from "react";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import BackButton from "./BackButton";
import Button from "./Button";
import PostMessage from "./PostMessage";
import Rating from "./Rating";

export default function MovieExpandedCard({ movie, isLoading, error, setIsMovieExpanded, watchedList, setWatchedList }) {
    const [rating, setRating] = useState(0);

    const handleAddMovie = () => {
        const watchedMovie = {
            imdbID: movie.imdbID,
            Title: movie.Title,
            Poster: movie.Poster,
            userRating: rating,
        };

        const updatedWatchedList = [...watchedList, watchedMovie];
        setWatchedList(updatedWatchedList);
    };

    return (
        <div className='mov-view'>
            {isLoading ? <Loader /> : error ? <ErrorMessage error={error} /> : (
                <>
                    <div className='mov-view-header'>
                        <BackButton onClick={() => setIsMovieExpanded(false)} label={"Results"} />
                    </div>
                    <div className='mov-view-item'>
                        <div className='mov-view-item-img'>
                            <img src={movie.Poster} alt={movie.Title} />
                            <div className='poster-overlay'></div>
                        </div>
                        <h2>{movie.Title}</h2>
                        <div className='mov-view-item-details'>
                            <span>{movie.Year}</span> | <span>{movie.Rated}</span> | <span>{movie.Genre}</span>
                        </div>
                        <p className='mov-view-item-plot'>{movie.Plot}</p>
                        {watchedList.some((watchedMovie) => watchedMovie.imdbID === movie.imdbID) ? (
                            <PostMessage message={"Already in your list!"} />
                        ) : (
                            <>
                                <div className='mov-view-item-rating'>
                                    <Rating rating={rating} setRating={setRating} />
                                </div>
                                <div className='btn-container'>
                                    <Button onClick={handleAddMovie} label='Add to list' className='btn btn-primary' />
                                </div>
                            </>
                        )}
                    </div>
                </>
            )}
        </div>
    );
}