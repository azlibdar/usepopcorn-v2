export default function EmptyState({ img, heading, subheading }) {
    return (
        <div className="empty-state">
            <img src={img} alt="Empty state" />
            <div className='empty-state-text'>
                <h3>{heading}</h3>
                <p>{subheading}</p>
            </div>
        </div>
    )
}