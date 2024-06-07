export default function SearchInput({ query, onChange }) {
    return (
        <input value={query} onChange={onChange} type="text" placeholder="Search for a movie.." />
    )
}