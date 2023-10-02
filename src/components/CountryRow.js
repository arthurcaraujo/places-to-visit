import "./CountryRow.css";
import PlaceCard from "./PlaceCard";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useFlipping } from "./FlipContext";

export default function CountryRow({props}) {
    const countryRowRef = useRef(null);
    const cardsContainerRef = useRef(null);

    const {darkMode} = useFlipping();

    const [externalWidth, setExternalWidth] = useState(0);
    const [internalWidth, setInternalWidth] = useState(0);
    const [rowPosition, setRowPosition] = useState(0);

    useLayoutEffect(() => {
        setExternalWidth(countryRowRef.current.clientWidth);
        setInternalWidth(cardsContainerRef.current.scrollWidth);
    }, []);

    useEffect(() => {
        function handleWindowResize() {
            setExternalWidth(countryRowRef.current.clientWidth);
            setInternalWidth(cardsContainerRef.current.scrollWidth);
        }

        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        }
    }, []);

    useEffect(() => {
        function handleRowScrolling() {
            setRowPosition(cardsContainerRef.current.scrollLeft);
        }

        cardsContainerRef.current.addEventListener("scroll", handleRowScrolling);

        return () => {
            cardsContainerRef.current.removeEventListener("scroll", handleRowScrolling);
        }
    }, [rowPosition]);

    function scroll(direction) {
        const cardWidth = parseInt(
            getComputedStyle(cardsContainerRef.current.children[0]).width
        );
        cardsContainerRef.current.scrollLeft += (cardWidth + 25.6) * direction;
    }

    return (
        <section
            className="country-row"
            ref={countryRowRef}
            style={{backgroundColor: darkMode ? "#2B2B35" : "#FFF"}}
        >
            <h3
                className="country-name"
                style={{
                    backgroundColor: darkMode ? "#111" : "#999",
                    color: darkMode ? "#fff" : "#000"
                }}
            >
                {props[0].countryName}
            </h3>
            <div className="cards-container" ref={cardsContainerRef}>
                {props.map(place =>
                    <PlaceCard
                        key={place.title}
                        placeProps={place}
                    />
                )}
                {
                    (internalWidth > externalWidth) &&
                    (Math.floor(internalWidth - rowPosition) > externalWidth) &&
                    <button
                        className="row-btn next"
                        onClick={() => scroll(1)}
                    >
                        <i className="fa fa-arrow-right"></i>
                    </button>
                }
                {
                    (rowPosition > 0) &&
                    <button
                        className="row-btn previous"
                        onClick={() => scroll(-1)}
                    >
                        <i className="fa fa-arrow-left"></i>
                    </button>
                }
            </div>
        </section>
    )
}