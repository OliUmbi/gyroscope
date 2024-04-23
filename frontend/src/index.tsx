import "./styles/main.scss";
import App from "./app";
import {StrictMode} from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";
import Scroll from "./components/base/scroll/scroll.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <App />
            <Scroll/>
        </BrowserRouter>
    </StrictMode>,
)
