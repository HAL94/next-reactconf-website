import { useEffect, useState } from "react";

export default function useScrollPosition() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [windowWidth, setWidth] = useState(0);   
    useEffect(() => {
        const updatePosition = () => {
            setScrollPosition(window.pageYOffset);
            setWidth(window.innerWidth);            
        }
        window.addEventListener('scroll', updatePosition);
        updatePosition()
        return () => window.removeEventListener('scroll', updatePosition)
    }, [])

    return { scrollPosition, windowWidth };
}