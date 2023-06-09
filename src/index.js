import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {BrowserRouter as Router} from "react-router-dom";
import {theme} from "./theme";
import {Provider} from "react-redux";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <CssBaseline/>
        <ThemeProvider theme={theme}>
            <Router>
                <Provider store={store}>
                    <App/>
                </Provider>
            </Router>

        </ThemeProvider>
    </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
