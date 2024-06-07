import { StarFillIcon } from "@primer/octicons-react";

export default function Star({ onRate, onHoverIn, onHoverOut, full }) {
    return (
        <span
            role="button"
            onMouseEnter={onHoverIn}
            onMouseLeave={onHoverOut}
            onClick={onRate}
            className="star-rating__stars--i"
        >
            {full ? (
                <StarFillIcon size={24} fill="#f6c927" />
            ) : (
                <StarFillIcon size={24} fill="#8b949e" />
            )}
        </span>
    );
}