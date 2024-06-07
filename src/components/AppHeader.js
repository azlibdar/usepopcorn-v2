import AppLogo from "./AppLogo";
import UserMoviesList from "./UserMoviesList";

export default function AppHeader({ watchedList, setWatchedList }) {
    return (
        <header className="app-header">
            <AppLogo />
            <UserMoviesList watchedList={watchedList} setWatchedList={setWatchedList} />
        </header>
    );
}