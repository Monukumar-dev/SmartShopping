import { useState, useEffect } from "react";

const useDeviceSize = () => {
    const [isOnMobile, setIsOnMobile] = useState(false);
    const [isOnTablet, setIsOnTablet] = useState(false);
    const [isOnSmallDesktop, setIsOnSmallDesktop] = useState(false);
    const [isOnDesktop, setIsOnDesktop] = useState(false);
    const [isOnLargeDesktop, setIsOnLargeDesktop] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const isMobile = window.matchMedia("(max-width: 600px)").matches;
            const isTablet = window.matchMedia(
                "(min-width: 601px) and (max-width: 900px)"
            ).matches;
            const isSmallDesktop = window.matchMedia(
                "(min-width: 901px) and (max-width: 1200px)"
            ).matches;
            const isDesktop = window.matchMedia(
                "(min-width: 1201px) and (max-width: 1440px)"
            ).matches;
            const isLargeDesktop = window.matchMedia("(min-width: 1441px)").matches;

            setIsOnMobile(isMobile);
            setIsOnTablet(isTablet);
            setIsOnSmallDesktop(isSmallDesktop);
            setIsOnDesktop(isDesktop);
            setIsOnLargeDesktop(isLargeDesktop);
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return {
        isOnMobile,
        isOnTablet,
        isOnSmallDesktop,
        isOnDesktop,
        isOnLargeDesktop,
    };
};

export default useDeviceSize;
