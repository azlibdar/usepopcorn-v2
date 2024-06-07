import { useState } from "react";
import Star from "./Star";

export default function Rating({ rating, setRating }) {
    const [tempRating, setTempRating] = useState(0);

    const handleSetRating = (rating) => {
        setRating(rating);
    };

    return (
        <div className="star-rating">
            <p className="star-rating__text">{tempRating || rating || 0}</p>
            <div className="star-rating__stars">
                {Array.from({ length: 5 }, (_, i) => (
                    <Star
                        key={i}
                        full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
                        onRate={() => handleSetRating(i + 1)}
                        onHoverIn={() => setTempRating(i + 1)}
                        onHoverOut={() => setTempRating(0)}
                    />
                ))}
            </div>
        </div>
    );
}