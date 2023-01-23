import React from 'react';

const Card = () => {
    const nomImage = "bg";
    
    return (
        <div>
            <img
                src={"../assets/img/drift/${nomImage}.png"} alt="image" />
        </div>
    );
};

export default Card;