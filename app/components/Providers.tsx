"use client";

import { ReactLenis } from '@studio-freight/react-lenis';
import NoiseOverlay from "./NoiseOverlay";

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ReactLenis root>
            <NoiseOverlay />
            {children}
        </ReactLenis>
    );
}
