import CountryRow from "./CountryRow";
import data from "../data";

export default function Main() {
    return (
        <main>
            <button>Add a place</button>
            <button>Edit</button>
            {data.map(country =>
                <CountryRow
                    key={country[0].countryName}
                    props={country}
                />
            )}
        </main>
    )
}