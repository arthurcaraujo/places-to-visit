import "./Header.css";
import { useFlipping } from "./FlipContext";
import websiteLogo from "../assets/website-logo.png";

export default function Header() {
    const {theme, toggleTheme} = useFlipping();

    return (
        <header>
            <nav>
                <a
                    href="https://arthurcaraujo.github.io/"
                    id="main-website-link"
                >
                    <img alt="Website logo" src={websiteLogo} />
                    <span id="logo-first-name">ARTHUR</span>
                    <span id="logo-last-name">C. ARAÚJO</span>
                </a>
                <h1>My travel<br/> journal</h1>
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
            </nav>
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