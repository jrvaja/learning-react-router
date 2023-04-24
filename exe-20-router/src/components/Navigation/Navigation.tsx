import { NavLink } from "react-router-dom";
import styled from "styled-components";
import React from "react";
import classes from "./Navigation.module.css";

const Header = styled.header`
  max-width: 60rem;
  margin: auto;
  padding: 2rem;
  display: flex;
  justify-content: center;
`;

const NavList = styled.ul`
  display: flex;
  gap: 1rem;
  padding: 0;
`;

const NavListItem = styled.li`
  display: flex;

  & a {
    text-decoration: none;
    color: var(--color-primary-400);

    &:hover,
    &:active {
      color: var(--color-primary-800);
      text-decoration: underline;
    }
  }
`;

const Navigation = () => {
  return (
    <Header>
      <nav>
        <NavList>
          <NavListItem>
            <NavLink
              to=""
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </NavListItem>
          <NavListItem>
            <NavLink
              to="products"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Products
            </NavLink>
          </NavListItem>
        </NavList>
      </nav>
    </Header>
  );
};

export default Navigation;
