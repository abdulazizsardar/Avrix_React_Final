import React from 'react';

function RatingsFive() {
    const starArray = new Array(5).fill(null);

    return (
        <div>
            {starArray.map((_, index) => (
                <i key={index} className="fas fa-star"></i>
            ))}
        </div>
    );
}

export default RatingsFive;
