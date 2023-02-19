import * as React from "react";
import styled from "styled-components";
import "./Components.css";
import Logo from '../images/Logo1.png';

// importing material UI components
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const Logo1 = styled.img`
min-width: 0px;
min-height: 0px;
align-self: flex-start;
margin: 0px 0px 0px 0px;
box-sizing: border-box;
`;




export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar class="Header">
        <div>
          <Button href="./">
            <Logo1 src={Logo} />
          </Button>
          <div display="flex" justify-content="flex-end">
          <Button justify="right" class="GenerateNowRectangle" href="./GenerationPage">
            <div class="GenerateNowText">Generate Now</div>
          </Button>
          </div>
        </div>        
      </Toolbar>
    </AppBar>
  );
}


