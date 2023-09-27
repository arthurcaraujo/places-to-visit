import "./PlaceCard.css";
import { useFlipping } from "./FlipContext";
import { useEffect, useState } from "react";

export default function PlaceCard({placeProps}) {
    const {flipAllCards} = useFlipping();
    const [flipCard, setFlipCard] = useState(false);

    function handleFlipCard() {
        setFlipCard(!flipCard);
    }

    useEffect(() => {
        if (flipAllCards) setFlipCard(true);
        else setFlipCard(false);
    }, [flipAllCards]);

    return (
        <div
            className="card"
            onClick={handleFlipCard}
        >
            <div
                className="card-inner"
                style={{
                    transform: flipCard ? "rotateY(180deg)" : "none"
                }}
            >
                <div className="card-front">
                    <img
                        className="card-image-front"
                        src={require(`../assets/${placeProps.img}`)}
                    />
                    <div className="card-status">Visited! Yay!</div>
                </div>
                <div className="card-back">
                    <img
                        className="card-image-back"
                        src={require(`../assets/${placeProps.img}`)}
                    />
                    <h4>{placeProps.title}</h4>
                    <h5>{placeProps.location}</h5>
                    <a
                        href={placeProps.googleMapsLink}
                        target="_blank"
                    >
                        View on Google Maps
                    </a>
                </div>
            </div>
        </div>
    )
}