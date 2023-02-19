import * as React from "react";
import styled from "styled-components";
import "./Components.css";
import Logo from '../images/Logo1.png';
import TreeLeft from '../images/TreeLeft.svg';
import TreeRight from '../images/TreeRight.svg';

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

const TreeLeft1 = styled.img`
    width: 800px;
    min-width: 0px;
    height: 400px;
    min-height: 0px;
    left: 40px;
    top: 2550px;
    position: absolute;
    box-sizing: border-box;
`;

const TreeRight1 = styled.img`
    width: 800px;
    min-width: 0px;
    height: 400px;
    min-height: 0px;
    left: 740px;
    top: 2550px;
    position: absolute;
    box-sizing: border-box;
`;

const FooterContainer = styled.footer`
  background-color: #dadada;
  color: #000;
  padding: 10px;
  text-align: center;
`;

function Footer() {
  return (
    <FooterContainer>
        <TreeLeft1 src={TreeLeft} />
        <Button href="./">
            <Logo1 src={Logo} />
        </Button>
        <TreeRight1 src={TreeRight} />
        <br />

        <textFooter><b>
            Made by Team AlgoGorls at ElleHacks
            </b>
            <textFooter>
                <br />
                UI/UX Designer: Kelly Owenya
                <br />
                Front-End Developer: Anamta Masoodi
                <br />
                Back-End Developer: Cecelia Nydam
                <br />
            </textFooter>
            <br />
        </textFooter>
        
    </FooterContainer>
  );
}

export default Footer;



