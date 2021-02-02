import { List } from "@material-ui/core";
import React from "react";
import NavbarItemComponent from "./NavbarItemComponent";

const NavBarComponet = (items, depthStep, depth, expanded) => {
  return (
    <div>
      <List>
        {items.items.menu.map((sideBarItem, index) => (
          <NavbarItemComponent
            key={`${sideBarItem.name}${index}`}
            depthStep={depthStep}
            depth={depth == null ? 0 : index + 1}
            expanded={expanded}
            {...sideBarItem}
          />
        ))}
      </List>
    </div>
  );
};

export default NavBarComponet;
