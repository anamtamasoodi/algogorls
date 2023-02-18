/**
import React from "react";
import styled from "styled-components";


const HomePage = ({}) => {
  const OliveGreenRectangleFunction = (e, name) => {
    alert(`${name} was clicked`);
  };
  const GenerateEmailFunction = (e, name) => {
    alert(`${name} was clicked`);
  };
  const SkyBlueRectangleFunction = (e, name) => {
    alert(`${name} was clicked`);
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

  return (
    <HomePage>
      <Element1>
        <Image1 src={`https://file.rendit.io/n/AG1desX1ZV5IHSnOL6pt.png`} />
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
            GenerateEmailFunction(
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

export default HomePage

*/
//------------------------



import React from "react";
import styled from "styled-components";

const HomePage = ({}) => {
  const OliveGreenRectangle1Function = (e, name) => {
    alert(`${name} was clicked`);
  };
  const TropicalRainForestRectangleFunction = (e, name) => {
    alert(`${name} was clicked`);
  };
  const SkyBlueRectangle1Function = (e, name) => {
    alert(`${name} was clicked`);
  };
  const SkyBlueRectangleFunction = (e, name) => {
    alert(`${name} was clicked`);
  };
  const WhiteRectangleFunction = (e, name) => {
    alert(`${name} was clicked`);
  };
  const WhiteRectangle2Function = (e, name) => {
    alert(`${name} was clicked`);
  };
  const EmailButtonFunction = (e, name) => {
    alert(`${name} was clicked`);
  };
  const EmailButton2Function = (e, name) => {
    alert(`${name} was clicked`);
  };
  const OliveGreenRectangleFunction = (e, name) => {
    alert(`${name} was clicked`);
  };

  const HomePage = styled.div`
  position: relative;
  gap: 103px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0px 0px 175px 0px;
  box-sizing: border-box;
  background-color: #f3f3f3;
  overflow: hidden;
`;

  return (
    <HomePage>
      <Image6 src={`https://file.rendit.io/n/eEhKoT1Qc6qdAnMAjdg2.svg`} />
      <Image5 src={`https://file.rendit.io/n/DbylcL4FS6Jj48fkpw2L.svg`} />
      <Image4 src={`https://file.rendit.io/n/rZzXFwSZ524cCAmivAkq.svg`} />
      <Text8>
        Made by Team AlgoGorls at ElleHacks
        <Paragraph6>
          <br />
          UI/UX Designer: Kelly Owenya
          <br />
          Front-End Developer: Anamta Masoodi
          <br />
          Back-End Developer: Cecelia Nydam
        </Paragraph6>
      </Text8>
      <Paragraph5>
        Environmentalists?
        <br />
        Meet artificial <br />
        intelligence.
      </Paragraph5>
      <TimberwolfRectangle>
        <Text7>Devpost</Text7>
        <OliveGreenRectangle1
          onClick={(e) =>
            OliveGreenRectangle1Function(e, "OliveGreenRectangle1")
          }
        >
          <Text6>Generate Now</Text6>
        </OliveGreenRectangle1>
      </TimberwolfRectangle>
      <Text3>
        Fight for the issues
        <br />
        you care about.
      </Text3>
      <Group>
        <Group2>
          <Logo1 src={`https://file.rendit.io/n/vtmrLJRAlj5fZtwXpbxK.png`} />
          <Paragraph4>
            Effortlessly advocate for the earth with EcoEcho.
          </Paragraph4>
          <Group3>
            <TropicalRainForestRectangle
              onClick={(e) =>
                TropicalRainForestRectangleFunction(
                  e,
                  "TropicalRainForestRectangle"
                )
              }
            >
              <Text5>Generate an email</Text5>
            </TropicalRainForestRectangle>
            <SkyBlueRectangle1
              onClick={(e) => SkyBlueRectangle1Function(e, "SkyBlueRectangle1")}
            >
              <Text4>Make a petition</Text4>
            </SkyBlueRectangle1>
          </Group3>
        </Group2>
        <SkyBlueRectangle
          onClick={(e) => SkyBlueRectangleFunction(e, "SkyBlueRectangle")}
        >
          <Text2>Find your MP</Text2>
        </SkyBlueRectangle>
        <Paragraph1>
          Advocacy made more accessible than ever — make a change with just a
          few clicks!
        </Paragraph1>
        <Paragraph>
          Amplify your voice and get in touch with lawmakers.
        </Paragraph>
        <PoliticianGraphic>
          <WhiteRectangle
            onClick={(e) => WhiteRectangleFunction(e, "WhiteRectangle")}
          >
            <EnterYourLocation1>
              |<EnterYourLocation>Enter your location...</EnterYourLocation>
            </EnterYourLocation1>
          </WhiteRectangle>
        </PoliticianGraphic>
        <Element1>
          <Image1 src={`undefined`} />
        </Element1>
      </Group>
      <Group1>
        <Logo src={`https://file.rendit.io/n/vtmrLJRAlj5fZtwXpbxK.png`} />
        <Paragraph3>
          At EcoEcho, we believe that the health of our planet is one of the
          most important issues we face today. The Earth is our home, and we are
          committed to doing everything we can to protect it. That's why we
          created EcoEcho - to make it easier for people like you to speak up
          for the planet and advocate for change.
        </Paragraph3>
        <WhiteRectangle2
          onClick={(e) => WhiteRectangle2Function(e, "WhiteRectangle2")}
        >
          <EnterAGlobalIssue1>
            |<EnterAGlobalIssue>Enter a global issue...</EnterAGlobalIssue>
          </EnterAGlobalIssue1>
          <Image3 src={`https://file.rendit.io/n/GRAhamvsgtdqWMOOOj4R.png`} />
        </WhiteRectangle2>
        <EmailButton onClick={(e) => EmailButton2Function(e, "EmailButton2")}>
          <WhiteRectangle1>
            <Paragraph2>
              Ground pollution
              <br />
              Deforestation <br />
              Overmining
              <br />
              Soil quality
              <br />
              Urbanization
              <br />
              Declining agricultural productivity
              <br />
            </Paragraph2>
          </WhiteRectangle1>
        </EmailButton>
        <Image2 src={`https://file.rendit.io/n/nlYO09DU9uViq2Qhgf3p.svg`} />
        <OliveGreenRectangle
          onClick={(e) => OliveGreenRectangleFunction(e, "OliveGreenRectangle")}
        >
          <Text1>Generate Now</Text1>
        </OliveGreenRectangle>
      </Group1>
    </HomePage>
  );
};


const Image6 = styled.img`
  width: 1440px;
  min-width: 0px;
  height: 377px;
  min-height: 0px;
  left: 0px;
  top: 2188px;
  position: absolute;
  box-sizing: border-box;
`;
const Image5 = styled.img`
  width: 960px;
  min-width: 0px;
  height: 540px;
  min-height: 0px;
  left: 2px;
  top: 2053px;
  position: absolute;
  box-sizing: border-box;
`;
const Image4 = styled.img`
  width: 960px;
  min-width: 0px;
  height: 540px;
  min-height: 0px;
  left: 491px;
  top: 2053px;
  position: absolute;
  box-sizing: border-box;
`;
const Text8 = styled.div`
  width: 502px;
  height: 320px;
  left: 469px;
  top: 2252px;
  position: absolute;
  font-size: 25px;
  font-weight: 600;
  font-family: Montserrat;
  text-align: center;
  box-sizing: border-box;
`;
const Paragraph6 = styled.div`
  display: contents;
  font-size: 25px;
  font-weight: 400;
  font-family: Montserrat;
`;
const Paragraph5 = styled.div`
  width: 843px;
  height: 576px;
  left: 60px;
  top: 70px;
  position: absolute;
  color: #96ac51;
  font-size: 68px;
  font-family: Unbounded;
  box-sizing: border-box;
`;
const TimberwolfRectangle = styled.div`
  width: 1440px;
  height: 85px;
  left: 0px;
  top: 0px;
  position: absolute;
  gap: 60px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 14px 27px;
  box-sizing: border-box;
  background-color: #d9d9d9;
`;
const Text7 = styled.div`
  align-self: flex-start;
  margin: 16px 0px 17px 0px;
  font-size: 20px;
  font-weight: 500;
  font-family: Montserrat;
  text-align: center;
  box-sizing: border-box;
`;
const OliveGreenRectangle1 = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
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
const Text6 = styled.div`
  align-self: flex-end;
  margin: 0px 0px 0px 1px;
  color: #ffffff;
  font-size: 20px;
  font-weight: 500;
  font-family: Montserrat;
  text-align: center;
  box-sizing: border-box;
`;
const Text3 = styled.div`
  width: 843px;
  height: 576px;
  left: 60px;
  top: 1359px;
  position: absolute;
  color: #96ac51;
  font-size: 60px;
  font-family: Unbounded;
  box-sizing: border-box;
`;
const Group = styled.div`
  width: 102.92%;
  position: relative;
  gap: 74px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-self: flex-end;
  margin: -65px -41.67px 0px 0px;
  box-sizing: border-box;
`;
const Group2 = styled.div`
  width: 48.29%;
  position: relative;
  gap: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  margin: 0px 0px 794px 0px;
  box-sizing: border-box;
`;
const Logo1 = styled.img`
  min-width: 0px;
  min-height: 0px;
  align-self: flex-start;
  margin: 0px 0px 331px 0px;
  box-sizing: border-box;
`;
const Paragraph4 = styled.div`
  align-self: flex-end;
  font-size: 25px;
  font-family: Montserrat;
  box-sizing: border-box;
`;
const Group3 = styled.div`
  gap: 16px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-start;
  margin: 0px 0px 0px 41px;
  box-sizing: border-box;
`;
const TropicalRainForestRectangle = styled.button`
  width: 51.87%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
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
const Text5 = styled.div`
  align-self: center;
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
  font-family: Montserrat;
  text-align: center;
  box-sizing: border-box;
`;
const SkyBlueRectangle1 = styled.button`
  width: 51.87%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
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
const Text4 = styled.div`
  align-self: flex-end;
  font-size: 18px;
  font-weight: 500;
  font-family: Montserrat;
  text-align: center;
  box-sizing: border-box;
`;
const SkyBlueRectangle = styled.button`
  width: 222px;
  height: 51.3px;
  left: 1159px;
  top: 1296px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0px;
  padding-top: 13.4px;
  padding-right: 50px;
  padding-bottom: 15.9px;
  padding-left: 50px;
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
const Text2 = styled.div`
  align-self: center;
  font-size: 18px;
  font-weight: 500;
  font-family: Montserrat;
  text-align: center;
  box-sizing: border-box;
`;
const Paragraph1 = styled.div`
  width: 635px;
  height: 60px;
  left: 755px;
  top: 1212px;
  position: absolute;
  font-size: 25px;
  font-family: Montserrat;
  text-align: right;
  box-sizing: border-box;
`;
const Paragraph = styled.div`
  width: 711px;
  height: 321px;
  left: 681px;
  top: 936px;
  position: absolute;
  color: #96ac51;
  font-size: 60px;
  font-family: Unbounded;
  text-align: right;
  box-sizing: border-box;
`;
const PoliticianGraphic = styled.div`
  width: 1189px;
  height: 674px;
  left: 0px;
  top: 791px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 505px 40px 118px 40px;
  box-sizing: border-box;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/0jZIC4KyY9hYoGLfEcQN.svg");
`;
const WhiteRectangle = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-end;
  padding: 0px;
  padding-top: 15px;
  padding-right: 29px;
  padding-bottom: 14px;
  padding-left: 29px;
  border-width: 0px;
  border-radius: 50px;
  border-style: solid;
  border-color: #003b30;
  box-sizing: content-box;
  background-color: #ffffff;
  cursor: pointer;
  &: hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  } ;
`;
const EnterYourLocation1 = styled.div`
  align-self: flex-start;
  margin: 0px 62px 0px 0px;
  font-size: 18px;
  font-weight: 500;
  font-family: Montserrat;
  box-sizing: border-box;
`;
const EnterYourLocation = styled.div`
  display: contents;
  color: rgba(0, 0, 0, 0.49);
  font-size: 18px;
  font-weight: 500;
  font-family: Montserrat;
`;
const Element1 = styled.div`
  width: 55.84%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  margin: 135px 0px 606px 0px;
  box-sizing: border-box;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/lf3VVT6BMTTpt6yemEvN.svg");
`;
const Image1 = styled.img`
  min-width: 0px;
  min-height: 0px;
  align-self: flex-start;
  box-sizing: border-box;
`;
const Group1 = styled.div`
  width: 93.82%;
  height: 886px;
  position: relative;
  flex-shrink: 0;
  align-self: flex-end;
  margin: 0px 29px 0px 0px;
  box-sizing: border-box;
`;
const Logo = styled.img`
  width: 242px;
  min-width: 0px;
  height: 214px;
  min-height: 0px;
  left: 539px;
  top: 672px;
  position: absolute;
  box-sizing: border-box;
`;
const Paragraph3 = styled.div`
  width: 710px;
  height: 180px;
  left: 0px;
  top: 244px;
  position: absolute;
  font-size: 25px;
  font-family: Montserrat;
  box-sizing: border-box;
`;
const WhiteRectangle2 = styled.button`
  width: 437px;
  height: 56px;
  left: 0px;
  top: 453px;
  position: absolute;
  gap: 159px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px;
  padding-top: 13px;
  padding-right: 16px;
  padding-bottom: 13px;
  padding-left: 34px;
  border-width: 0px;
  border-radius: 50px;
  border-style: solid;
  border-color: #003b30;
  box-sizing: content-box;
  background-color: #ffffff;
  cursor: pointer;
  &: hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  } ;
`;
const EnterAGlobalIssue1 = styled.div`
  align-self: center;
  margin: 4px 0px;
  font-size: 18px;
  font-weight: 500;
  font-family: Montserrat;
  box-sizing: border-box;
`;
const EnterAGlobalIssue = styled.div`
  display: contents;
  color: rgba(0, 0, 0, 0.49);
  font-size: 18px;
  font-weight: 500;
  font-family: Montserrat;
`;
const Image3 = styled.img`
  min-width: 0px;
  min-height: 0px;
  align-self: flex-end;
  margin: 3px 0px 0px 0px;
  box-sizing: border-box;
`;
const EmailButton = styled.button`
  width: 437px;
  height: 278px;
  left: 0px;
  top: 501px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0px;
  border-width: 0px;
  box-sizing: content-box;
  background-color: transparent;
  background-size: cover;
  background-position: 50% 50%;
  background-blend-mode: ;
  background-image: ;
  box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  &: hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  } ;
`;
const WhiteRectangle1 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-self: flex-start;
  padding: 32px 34px 17px 34px;
  border-radius: 50px;
  border-style: solid;
  border-color: #003b30;
  box-sizing: border-box;
  background-color: #ffffff;
`;
const Paragraph2 = styled.div`
  align-self: flex-start;
  font-size: 18px;
  font-weight: 500;
  font-family: Montserrat;
  box-sizing: border-box;
`;
const Image2 = styled.img`
  width: 609px;
  min-width: 0px;
  height: 533px;
  min-height: 0px;
  left: 742px;
  top: 0px;
  position: absolute;
  box-sizing: border-box;
`;
const OliveGreenRectangle = styled.button`
  width: 222px;
  height: 56px;
  left: 448px;
  top: 453px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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
const Text1 = styled.div`
  align-self: flex-end;
  margin: 0px 0px 0px 1px;
  color: #ffffff;
  font-size: 20px;
  font-weight: 500;
  font-family: Montserrat;
  text-align: center;
  box-sizing: border-box;
`;

export default HomePage