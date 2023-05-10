import { useState } from "react";
import styled from "styled-components";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const MenuIconComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <MenuIcon onClick={toggleMenu}>
      {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
    </MenuIcon>
  );
};

export default MenuIconComponent;

const MenuIcon = styled.div`
  cursor: pointer;
  font-size: 2rem;
  color: #fff;

  @media (min-width: 912px) {
    display: none;
  }
`;
