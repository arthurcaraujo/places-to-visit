import "./Main.css";
import CountryRow from "./CountryRow";
import data from "../data";
import { useFlipping } from "./FlipContext";

export default function Main() {
    const {theme, toggleFlipAllCards} = useFlipping();

    return (
        <main
            style={{ backgroundColor: (theme === "dark") ? "#2B2B35" : "#FFF" }}
        >
            <p
                id="flip-tip"
                style={{ color: (theme === "dark") ? "#FFF" : "#000" }}
            >
                Click on the cards to flip them.
            </p>
            {data.map(country =>
                <CountryRow
                    key={country[0].countryName}
                    props={country}
                />
            )}
            <button
                id="flip-all-cards-btn"
                onClick={toggleFlipAllCards}
            >
                Flip all cards
            </button>
        </main>
    )
}