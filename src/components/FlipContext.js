import { createContext, useContext, useEffect, useState } from "react";

const FlipContext = createContext(undefined);

export const FlipProvider = ({children}) => {
    const [flipAllCards, setflipAllCards] = useState(false);
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem("theme");
        return savedTheme ? savedTheme : "light";
    });

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    useEffect(() => {
        setTheme(localStorage.getItem("theme"));
    }, []);

    return (
        <FlipContext.Provider
            value={{
                flipAllCards,
                toggleFlipAllCards: () => setflipAllCards(flipAllCards ? false : true),
                theme,
                toggleTheme: () => setTheme(theme === "light" ? "dark" : "light")
            }}
        >
            {children}
        </FlipContext.Provider>
    )
}

export const useFlipping = () => useContext(FlipContext);