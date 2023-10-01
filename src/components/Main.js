import CountryRow from "./CountryRow";
import data from "../data";
import "./Main.css";
import { useFlipping } from "./FlipContext";

export default function Main() {
    const {toggleFlipAllCards} = useFlipping();

    return (
        <main>
            <p id="flip-tip">Click on the cards to flip them.</p>
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