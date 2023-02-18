import React from "react";
import styled from "styled-components";

export const HomePage = ({}) => {
  const OliveGreenRectangleFunction = (e, name) => {
    alert(`${name} was clicked`);
  };
  const TropicalRainForestRectangleFunction = (e, name) => {
    alert(`${name} was clicked`);
  };
  const SkyBlueRectangleFunction = (e, name) => {
    alert(`${name} was clicked`);
  };
  return (
    <HomePage>
      <Element1>
        <Image1 src={`undefined`} />
      </Element1>
      <Paragraph1>
        Environmentalists?
        <br />
        Meet artificial <br />
        intelligence.
      </Paragraph1>
      <Group>
        <TimberwolfRectangle>
          <Text4>About Us</Text4>
          <OliveGreenRectangle
            onClick={(e) =>
              OliveGreenRectangleFunction(e, "OliveGreenRectangle")
            }
          >
            <Text3>Generate Now</Text3>
          </OliveGreenRectangle>
        </TimberwolfRectangle>
        <Logo src={`https://file.rendit.io/n/AG1desX1ZV5IHSnOL6pt.png`} />
      </Group>
      <Paragraph>Effortlessly advocate for the planet with EcoEcho.</Paragraph>
      <Group1>
        <TropicalRainForestRectangle
          onClick={(e) =>
            TropicalRainForestRectangleFunction(
              e,
              "TropicalRainForestRectangle"
            )
          }
        >
          <Text2>Generate an email</Text2>
        </TropicalRainForestRectangle>
        <SkyBlueRectangle
          onClick={(e) => SkyBlueRectangleFunction(e, "SkyBlueRectangle")}
        >
          <Text1>Make a petition</Text1>
        </SkyBlueRectangle>
      </Group1>
    </HomePage>
  );
};

const HomePage = styled.div`
  position: relative;
  gap: 38px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0px 0px 394px 0px;
  box-sizing: border-box;
  background-color: #f3f3f3;
  overflow: hidden;
`;
const Element1 = styled.div`
  left: 737px;
  top: 70px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-sizing: border-box;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/ZStQgvmPw90LsbzxcMx5.svg");
`;
const Image1 = styled.img`
  min-width: 0px;
  min-height: 0px;
  box-sizing: border-box;
`;
const Paragraph1 = styled.div`
  width: 843px;
  height: 576px;
  left: 60px;
  top: 70px;
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  color: #96ac51;
  font-size: 68px;
  font-family: Unbounded;
  box-sizing: border-box;
`;
const Group = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: stretch;
  align-items: flex-start;
  margin: -65px 0px 319px 0px;
  padding: 0px 19px;
  box-sizing: border-box;
`;
const TimberwolfRectangle = styled.div`
  width: 1440px;
  height: 85px;
  left: 0px;
  top: 65px;
  position: absolute;
  gap: 55px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 14px 27px;
  box-sizing: border-box;
  background-color: #d9d9d9;
`;
const Text4 = styled.div`
  margin: 16px 0px 17px 0px;
  font-size: 20px;
  font-weight: 500;
  font-family: Montserrat;
  text-align: center;
  box-sizing: border-box;
`;
const OliveGreenRectangle = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  margin: 0px 0px 1px 0px;
  padding: 0px;
  padding-top: 15px;
  padding-right: 38px;
  padding-bottom: 17px;
  padding-left: 38px;
  border-width: 0px;
  border-radius: 50px;
  border-style: solid;
  border-color: #70853b;
  box-sizing: content-box;
  background-color: #96ac51;
  cursor: pointer;
  &: hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  } ;
`;
const Text3 = styled.div`
  margin: 0px 0px 0px 1px;
  color: #ffffff;
  font-size: 20px;
  font-weight: 500;
  font-family: Montserrat;
  text-align: center;
  box-sizing: border-box;
`;
const Logo = styled.img`
  min-width: 0px;
  min-height: 0px;
  position: relative;
  box-sizing: border-box;
`;
const Paragraph = styled.div`
  position: relative;
  margin: 0px 0px 0px 60px;
  font-size: 25px;
  font-family: Montserrat;
  box-sizing: border-box;
`;
const Group1 = styled.div`
  position: relative;
  gap: 16px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px 0px 0px 60px;
  box-sizing: border-box;
`;
const TropicalRainForestRectangle = styled.button`
  width: 51.87%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0px;
  padding-top: 16px;
  padding-right: 27px;
  padding-bottom: 18px;
  padding-left: 27px;
  border-width: 0px;
  border-radius: 50px;
  border-style: solid;
  border-color: #003b30;
  box-sizing: content-box;
  background-color: #32573b;
  cursor: pointer;
  &: hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  } ;
`;
const Text2 = styled.div`
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
  font-family: Montserrat;
  text-align: center;
  box-sizing: border-box;
`;
const SkyBlueRectangle = styled.button`
  width: 51.87%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 0px;
  padding-top: 16px;
  padding-right: 39px;
  padding-bottom: 18px;
  padding-left: 39px;
  border-width: 0px;
  border-radius: 50px;
  border-style: solid;
  border-color: #62bcbe;
  box-sizing: content-box;
  background-color: #a4d8db;
  backdrop-filter: blur(0px);
  cursor: pointer;
  &: hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  } ;
`;
const Text1 = styled.div`
  font-size: 18px;
  font-weight: 500;
  font-family: Montserrat;
  text-align: center;
  box-sizing: border-box;
`;
