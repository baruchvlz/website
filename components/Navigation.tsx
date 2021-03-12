import React from "react";
import { useAppContext } from "../shared/AppContext";
import { navLinks } from "../shared/constants";

function Navigation() {
  const { navigation } = useAppContext();

  return (
    <nav>
      {navLinks.map(
        link => (
          <a key={link.path} href="#" style={{ marginRight: "5px" }} onClick={(ev) => {
            ev.preventDefault();
            navigation.change(link.path);
          }}>
            {link.label}
          </a>
        )
      )}
    </nav>
  );
}

export default Navigation;