import { useRouter } from "next/router";
import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const pathname = useRouter().pathname;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}