import { AlertIcon } from "@primer/octicons-react"

export default function ErrorMessage({ error }) {
    return (
        <div className='error-message'>
            <AlertIcon size={24} fill='#ff453a' />
            <p>{error}</p>
        </div>
    )
}