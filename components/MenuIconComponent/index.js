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
  position: relative;
  top: 20px;
  right: 20px;
  cursor: pointer;
  font-size: 2rem;
  color: #fff;

  transition: all 0.3s ease-in-out;
`;
