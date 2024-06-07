export default function PostMessage({ message }) {
    return (
        <div className='post-message-container'>
            <div className='post-message'>
                <p>{message}</p>
            </div>
        </div>
    )
}