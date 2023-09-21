import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "../screens/HomeScreen";
import ContatoScreen from "../screens/ContatoScreen";
import Body from "../screens/Body";

export default function RootNavigation() {
    return (
        <BrowserRouter>
            <Routes >
                <Route path="/" element={<Body />} >
                    <Route path="/" element={<HomeScreen />} />
                    <Route path="/contato" element={<ContatoScreen />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}