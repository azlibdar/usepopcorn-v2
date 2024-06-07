import { useEffect, useState } from 'react';
import AppHeader from "./components/AppHeader";
import Search from "./components/Search";

export default function App() {
  const [watchedList, setWatchedList] = useState(() => {
    const localWatchedList = localStorage.getItem("watchedList");
    return localWatchedList ? JSON.parse(localWatchedList) : [];
  });

  useEffect(() => {
    localStorage.setItem("watchedList", JSON.stringify(watchedList));
  }, [watchedList]);

  return (
    <div className="App">
      <AppHeader watchedList={watchedList} setWatchedList={setWatchedList} />
      <main>
        <Search watchedList={watchedList} setWatchedList={setWatchedList} />
      </main>
    </div>
  );
}