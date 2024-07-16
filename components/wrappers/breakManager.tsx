'use client'

import { useBreakpoints } from "@/hooks/useBreakpoints";
import NotVisible from "../sections/notVisible";

const BreakManager = ({ children }: { children: React.ReactNode }) => {
  const { isMobile } = useBreakpoints();
  return (
    <>
      {isMobile ?
        <NotVisible />
        :
        <>
          {children}
        </>
      }
    </>
  );
};

export default BreakManager;