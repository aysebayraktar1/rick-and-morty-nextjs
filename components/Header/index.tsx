import React from "react";
import NextImage from "../Image";
import { HeaderWrapper, NavbarStyled, NavBarItem } from "./styled";

const Header = () => {
  return (
    <HeaderWrapper>
      <NavbarStyled>
        <NavBarItem href="/">Episodes</NavBarItem>
      </NavbarStyled>
      <NavBarItem href="/">
        <NextImage
          src="https://occ-0-1190-2774.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABVK-867iNzC3GeSiDQJ7jasFpdN4ySy2Of17S2KxaxbOOtsqax_k_ldd_f5TiDeulU3_lyJmIjtBgPVKLnE1cUK-kRk9yZsO4MXA.png?r=47e"
          priority={true}
          width={600}
          height={250}
          objectFit="cover"
          quality={100}
          alt="header"
        />
      </NavBarItem>
    </HeaderWrapper>
  );
};

export default Header;
