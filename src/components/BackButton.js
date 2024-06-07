import { ChevronLeftIcon } from "@primer/octicons-react"

export default function BackButton({ label, onClick }) {
    return (
        <button className='back-button' onClick={onClick}>
            <ChevronLeftIcon size={16} />{label}
        </button>
    )
}