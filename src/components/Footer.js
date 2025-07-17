import "./Footer.css";
import { useFlipping } from "./FlipContext";

export default function Footer() {
    const {theme} = useFlipping();

    return (
        <footer
            style={{
                backgroundColor: theme === "dark" ? "#111" : "#808080",
                borderTop: theme === "dark" ? "3px dashed #fff" : "3px dashed #000",
                color: theme === "dark" ? "#fff" : "#000"
            }}
        >
            <a
                href="https://arthurcaraujo.github.io/"
                style={{color: (theme === "dark") ? "#fff" : "#000"}}
            >
                Arthur C. Araújo
            </a> - {new Date().getFullYear()}
        </footer>
    )
}