import {useLocation} from "react-router-dom";
import {useEffect} from "react";

const Scroll = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        setTimeout(() => window.scrollTo(0, 0), 0.5)
    }, [pathname]);

    return null;
}

export default Scroll
