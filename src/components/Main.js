import CountryRow from "./CountryRow";
import data from "../data";
import "./Main.css";
import { useFlipping } from "./FlipContext";

export default function Main() {
    const {darkMode, toggleFlipAllCards} = useFlipping();

    return (
        <main
            style={{ backgroundColor: darkMode ? "#2B2B35" : "#fff" }}
        >
            <p
                id="flip-tip"
                style={{ color: darkMode ? "#fff" : "#000" }}
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