import React, { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { ReactLenis, useLenis } from "lenis/react";
import Lenis from "lenis";

interface SmoothScrollProps {
  children: React.ReactNode;
}

// Extend the Lenis type with our custom property
interface LenisWithInstance extends Lenis {
  instance: any; // Using any for now, but ideally this would be properly typed
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  const router = useRouter();

  // Use the Lenis hook with a type assertion
  useLenis(((lenis) => {
    // Add a class to the HTML element when Lenis initializes
    if (
      (lenis as LenisWithInstance).instance &&
      typeof document !== "undefined"
    ) {
      document.documentElement.classList.remove("no-js");
    }
  }) as (lenis: Lenis) => void);

  // Add no-js class on mount
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.classList.add("no-js");
    }
  }, []);

  // Handle route changes
  useEffect(() => {
    const handleRouteChange = () => {
      // You can add route change handling here if needed
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => router.events.off("routeChangeComplete", handleRouteChange);
  }, [router]);

  // Check if we're on the server side
  if (typeof window === "undefined") {
    return <>{children}</>;
  }

  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        touchMultiplier: 2,
      }}
    >
      <div className="min-h-screen">{children}</div>
    </ReactLenis>
  );
};

export default SmoothScroll;
