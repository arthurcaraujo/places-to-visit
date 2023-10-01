import "./PlaceCard.css";
import { useFlipping } from "./FlipContext";
import { useEffect, useState } from "react";

export default function PlaceCard({placeProps}) {
    const {flipAllCards} = useFlipping();
    const [flipCard, setFlipCard] = useState(false);
    const [visited, setVisited] = useState(placeProps.visited);

    function handleFlipCard() {
        setFlipCard(!flipCard);
    }

    useEffect(() => {
        flipAllCards ? setFlipCard(true) : setFlipCard(false);
    }, [flipAllCards]);

    function handleVisitedStatus() {
        setVisited(!visited);
    }

    return (
        <div className="card">
            <div
                className="card-inner"
                style={{
                    backgroundColor: visited ? "#0C1" : "#999",
                    outline: visited ? "0.3rem solid #0C1" : "0.3rem solid #999",
                    transform: flipCard ? "rotateY(180deg)" : "none"
                }}
            >
                <div className="card-front">
                    <img
                        alt={placeProps.title}
                        className="card-image-front"
                        onClick={handleFlipCard}
                        src={require(`../assets/${placeProps.img}`)}
                    />
                    <div
                        className="card-status"
                        onClick={handleVisitedStatus}
                        style={{backgroundColor: visited ? "#0C1" : "#999"}}
                    >
                        {visited ? "Visited! Yay!" : "Not visited"}
                    </div>
                </div>
                <div
                    className="card-back"
                    onClick={handleFlipCard}
                    style={{
                        backgroundColor: visited ? "#0C1" : "#999"
                    }}
                >
                    <img
                        alt={placeProps.title}
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