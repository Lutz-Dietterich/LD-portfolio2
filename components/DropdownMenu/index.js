import { useState } from "react";
import styled from "styled-components";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper>
      <Button onClick={handleToggle}>Menü</Button>
      {isOpen && (
        <Menu>
          <MenuItem>Option 1</MenuItem>
          <MenuItem>Option 2</MenuItem>
          <MenuItem>Option 3</MenuItem>
        </Menu>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

const Button = styled.button`
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 8px 16px;
  font-size: 1rem;
  cursor: pointer;
`;

const Menu = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 8px;
`;

const MenuItem = styled.li`
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
`;

export default DropdownMenu;
