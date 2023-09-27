import CountryRow from "./CountryRow";
import data from "../data";
import { useFlipping } from "./FlipContext";

export default function Main() {
    const {toggleFlipAllCards} = useFlipping();

    return (
        <main>
            <button
                onClick={toggleFlipAllCards}
            >
                Flip all cards
            </button>
            {data.map(country =>
                <CountryRow
                    key={country[0].countryName}
                    props={country}
                />
            )}
        </main>
    )
}