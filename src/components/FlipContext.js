import { createContext, useContext, useState } from "react";

const FlipContext = createContext(undefined);

export const FlipProvider = ({children}) => {
    const [flipAllCards, setflipAllCards] = useState(false);
    // const [numOfVisitedPlaces, setNumOfVisitedPlaces] = useState(0);

    return (
        <FlipContext.Provider
            value={{
                flipAllCards,
                toggleFlipAllCards: () => setflipAllCards(flipAllCards ? false : true),
                // numOfVisitedPlaces,
                // sumPlace: () => setNumOfVisitedPlaces(numOfVisitedPlaces++),
                // subtractPlace: () => setNumOfVisitedPlaces(numOfVisitedPlaces--)
            }}
        >
            {children}
        </FlipContext.Provider>
    )
}

export const useFlipping = () => useContext(FlipContext);