import { useEffect, useRef } from "react";

export function useLocation() {
  const locationRef = useRef<Location | null>(null);

  useEffect(() => {
    if (global.window) {
      locationRef.current = global.window.location;
    }
  }, [global.window]);

  return { location: locationRef.current };
}