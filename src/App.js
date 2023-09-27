import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { FlipProvider } from "./components/FlipContext";

export default function App() {
    return (
        <>
            <Header />
            <FlipProvider>
                <Main />
            </FlipProvider>
            <Footer />
        </>
    )
}