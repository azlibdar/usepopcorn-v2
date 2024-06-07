import { useEffect, useState } from "react";
import Button from "./Button";
import EmptyState from "./EmptyState";
import EmptyStateGithub from "../assets/img/empty-state-github.svg";
import UserMovieListCard from "./UserMovieListCard";

export default function UserMoviesList({ watchedList, setWatchedList }) {
    const [isUserMoviesListOpen, setIsUserMoviesListOpen] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
            const uml = document.querySelector(".uml");
            if (uml && !uml.contains(event.target)) {
                setIsUserMoviesListOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const handleOpenMoviesList = () => {
        setIsUserMoviesListOpen(!isUserMoviesListOpen);
    };

    const watchedListLength = watchedList.length;

    return (
        <div className="uml">
            <Button onClick={handleOpenMoviesList} label={`My list (${watchedListLength})`} className="btn btn-secondary" />
            {isUserMoviesListOpen && (
                <div className="uml-content">
                    {watchedListLength <= 0 ? (
                        <EmptyState img={EmptyStateGithub} heading="Oops! Your list is empty." subheading="Add movies to your list to see them here." />
                    ) : (
                        <ul className="uml-list">
                            <h2 className="tagline">Watch history</h2>
                            {watchedList.map((movie) => (
                                <li className="uml-list-item" key={movie.imdbID}>
                                    <UserMovieListCard movie={movie} setWatchedList={setWatchedList} watchedList={watchedList} />
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            )}
        </div>
    );
}