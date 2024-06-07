export default function Button({ label, className, onClick }) {
    return <button onClick={onClick} className={className}>{label}</button>
}