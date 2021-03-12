import React from "react";
import { useAppContext } from "../shared/AppContext";
import { navLinks } from "../shared/constants";

export default function Home() {
  const { navigation } = useAppContext();

  return (
    <div>
      {navLinks.map(link => {
        return (
          <div
            key={link.path}
            id={link.path}
            style={{ height: "400px" }}
            className={`${navigation.current === link.path ? "active" : ""}`}
          >
            {link.label}
          </div>
        );
      })}
    </div>
  );
}
