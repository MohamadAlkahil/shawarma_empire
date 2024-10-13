import { useState, useEffect } from "react";

export default function useScreenSize(query) {
    const [matches, setMatches] = useState(() => {
        if (typeof window !== 'undefined') {
            return window.matchMedia(query).matches;
        }
        return false; // Default for SSR
    });

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const mediaQuery = window.matchMedia(query);
        const handler = (event) => setMatches(event.matches);

        // Add listener
        mediaQuery.addEventListener('change', handler);

        // Clean up
        return () => mediaQuery.removeEventListener('change', handler);
    }, [query]);

    return matches;
}