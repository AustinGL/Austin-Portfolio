"use client";

import NoiseOverlay from "./NoiseOverlay";

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <>
            <NoiseOverlay />
            {children}
        </>
    );
}
