import "./Header.css";
import { useFlipping } from "./FlipContext";

export default function Header() {
    const {darkMode, toggleDarkMode} = useFlipping();

    return (
        <header>
            <h1>
                <span>My travel journal</span>
                <label
                    className="switch"
                    style={{
                        backgroundColor: darkMode ? "#003" : "#6CF",
                        boxShadow: darkMode ? "none" : "0 0 0.5rem #55F"
                    }}
                    title="Toggle dark/light mode"
                >
                    <input
                        onClick={toggleDarkMode}
                        type="checkbox"
                    />
                    <span className="slider"></span>
                </label>
            </h1>
            <h2
                style={{
                    backgroundColor: darkMode ? "#2B2B35" : "#fff",
                    color: darkMode ? "#fff" : "#333"
                }}
            >
                Places I dream of visiting
            </h2>
        </header>
    )
}