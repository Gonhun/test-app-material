import {
  Icon,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import React, { Component } from "react";

const NavbarItemComponent = (
  items,
  depthStep = 10,
  depth = 0,
  expanded,
  ...rest
) => {
  let Exp = true;
  let expandIcon;

  const ToggleExpand = () => {
    if(Exp == null){
      Exp = true
    }
    else{
      Exp = !Exp
    }
  };

  const menu = items;

  if (Array.isArray(menu.navChild) && menu.navChild.length) {
    expandIcon = !Exp ? (
      <ExpandLessIcon
        className={
          "sidebar-item-expand-arrow" + " sidebar-item-expand-arrow-expanded"
        }
      />
    ) : (
      <ExpandMoreIcon className="sidebar-item-expand-arrow" />
    );
  }

  return (
    <>
      <ListItem
        className="sidebar-item"
        button
        key={menu.id}
        onClick={ToggleExpand}
        {...rest}
      >
        <div className="sidebar-item-content">
          {menu.navIcon}
          <div
            style={{
              paddingLeft: `${menu.sortId > 1 ? menu.sortId * 3 : 1.5}` * 10,
            }}
            className="sidebar-item-text"
          >
            {menu.name}
          </div>
        </div>
        {expandIcon}
        {/* <ListItemIcon>{menu.navIcon}</ListItemIcon>
        <ListItemText primary={menu.name} style={{ paddingLeft: `${menu.sortId > 1 ? menu.sortId: 0}`  * 10 }} /> */}
      </ListItem>
      <Collapse in={Exp} timeout="auto" unmountOnExit>
        {Array.isArray(menu.navChild) ? (
          <List dense>
            {menu.navChild.map((subItem) => (
              <NavbarItemComponent
                key={subItem.id}
                depth={depth++}
                depthStep={depthStep}
                {...subItem}
              />
            ))}
          </List>
        ) : null}
      </Collapse>
    </>
  );
};

// style={{ paddingLeft: `${depth} * ${depthStep}` }}
export default NavbarItemComponent;
