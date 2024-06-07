import DeleteButton from "./DeleteButton";

export default function UserMovieListCard({ movie, setWatchedList, watchedList }) {
    const handleDeleteMovie = (e) => {
        e.stopPropagation();
        const movieID = e.currentTarget.id;
        const updatedWatchedList = watchedList.filter((movie) => movie.imdbID !== movieID);
        setWatchedList(updatedWatchedList);
    };

    return (
        <div className="flex justify-between align-center gap-12">
            <img src={movie.Poster} alt={movie.Title} />
            <div className="flex flex-col gap-2">
                <h3>{movie.Title}</h3>
                <p>You rated: {movie.userRating}/5</p>
            </div>
            <DeleteButton id={movie.imdbID} onClick={handleDeleteMovie} size={16} fill={"#ff453a"} />
        </div>
    );
}