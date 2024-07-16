'use client'
import { useEffect, useState } from "react";

export const useBreakpoints = () => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 730);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 730);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { isMobile };
}