import Container from "@mui/material/Container";
import {Header} from "./components/Header";

import {Route, Routes} from "react-router-dom";

import {Login} from "./pages/Login";
import {Registration} from "./pages/Registration";
import {Main} from "./pages/Main";

function App() {
    return (
        <>
            <Header/>
            <Container maxWidth="lg">
                <Routes>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Registration/>}/>
                    <Route path="/main" element={<Main/>}/>
                </Routes>
            </Container>
        </>
    );
}

export default App;
