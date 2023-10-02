import { createContext, useContext, useState } from "react";

const FlipContext = createContext(undefined);

export const FlipProvider = ({children}) => {
    const [flipAllCards, setflipAllCards] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    return (
        <FlipContext.Provider
            value={{
                flipAllCards,
                toggleFlipAllCards: () => setflipAllCards(flipAllCards ? false : true),
                darkMode,
                toggleDarkMode: () => setDarkMode(darkMode ? false : true)
            }}
        >
            {children}
        </FlipContext.Provider>
    )
}

export const useFlipping = () => useContext(FlipContext);