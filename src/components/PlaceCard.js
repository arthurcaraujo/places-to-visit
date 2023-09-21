import "./PlaceCard.css";

export default function PlaceCard({placeProps}) {
    return (
        <div className="card">
            <div className="card-inner">
                <div className="card-front">
                    <img
                        className="card-image-front"
                        src={require(`../assets/${placeProps.img}`)}
                    />
                    <div className="card-status">Visited!</div>
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