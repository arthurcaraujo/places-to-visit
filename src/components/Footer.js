import "./Footer.css";
import { useFlipping } from "./FlipContext";

export default function Footer() {
    const {darkMode} = useFlipping();

    return (
        <footer
            style={{
                backgroundColor: darkMode ? "#111" : "#808080",
                borderTop: darkMode ? "3px dashed #fff" : "3px dashed #000",
                color: darkMode ? "#fff" : "#000"
            }}
        >
            Arthur C. Araújo - {new Date().getFullYear()}
        </footer>
    )
}