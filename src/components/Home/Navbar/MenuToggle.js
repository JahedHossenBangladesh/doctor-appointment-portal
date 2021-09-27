import React from "react";
import { Box } from "@chakra-ui/react";
import { MenuIcon, CloseIcon } from "@chakra-ui/icons";

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return(
    ...
    <MenuToggle toggle={toggle} isOpen={isOpen}
    ...
  )
}

export default MenuToggle