import "./Header.css";
import { useFlipping } from "./FlipContext";

export default function Header() {
    const {theme, toggleTheme} = useFlipping();

    return (
        <header>
            <h1>
                <span>My travel journal</span>
                <label
                    className="switch"
                    style={{
                        backgroundColor: (theme === "dark") ? "#003" : "#6CF",
                        boxShadow: (theme === "dark") ? "none" : "0 0 0.5rem #55F"
                    }}
                    title="Toggle dark/light mode"
                >
                    <input
                        onClick={toggleTheme}
                        type="checkbox"
                    />
                    <span
                        className="slider"
                        style={{
                            backgroundColor: (theme === "dark") ? "#777" : "#FAC800",
                            outline: (theme === "dark") ? "none" : "0.25rem double yellow",
                            transform: (theme === "dark") ? "translateY(1rem)" : "none",
                            msTransform: (theme === "dark") ? "translateY(1rem)" : "none",
                            WebkitTransform: (theme === "dark") ? "translateY(1rem)" : "none"
                        }}
                    ></span>
                </label>
            </h1>
            <h2
                style={{
                    backgroundColor: (theme === "dark") ? "#2B2B35" : "#FFF",
                    color: (theme === "dark") ? "#FFF" : "#333"
                }}
            >
                Places I dream of visiting
            </h2>
        </header>
    )
}