import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import "./Components.css";

const GenerationPage = ({}) => {
    const [name , setName] = useState('');
    const [location , setLocation] = useState('');
    const [issue , setIssue] = useState('');
    const [story , setStory] = useState('');
    const [facts , setFacts] = useState('');

    const handleNameChange =(e)=>{
        setName(e.target.value);
    }
    
    const handleLocationChange =(e)=>{
        setLocation(e.target.value);
     }

    const handleIssueChange =(e)=>{
        setIssue(e.target.value);
    }

    const handleStoryChange =(e)=>{
        setStory(e.target.value);
    }
    const handleFactsChange =(e)=>{
        setFacts(e.target.value);
    }

    const handleSubmit=(e)=>{ 
        alert('A form was submitted with Name :"' + name +
        '" , location :"'+location +'" and issue :"' + issue + '"');
    }

    const OliveGreenRectangle1Function = (e, name) => {
        alert(`${name} was clicked`);
    };
    const WhiteRectangle4Function = (e, name) => {
        alert(`${name} was clicked`);
    };
    const WhiteRectangle3Function = (e, name) => {
        alert(`${name} was clicked`);
    };
    const WhiteRectangle2Function = (e, name) => {
        alert(`${name} was clicked`);
    };
    const WhiteRectangle1Function = (e, name) => {
        alert(`${name} was clicked`);
    };
    const WhiteRectangleFunction = (e, name) => {
        alert(`${name} was clicked`);
    };
    const OliveGreenRectangleFunction = (e, name) => {
        alert(`${name} was clicked`);
    };

    const GenerationPage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    box-sizing: border-box;
    background-color: #f3f3f3;
    overflow: hidden;
    `;

    return (
        <div>
        <Header>
        </Header>
        <Text8>Write now, right now.</Text8>
        <Paragraph4>Use our AI-powered generator to write persuasive and effective text instantly.</Paragraph4>
        <div>
            <form onSubmit={handleSubmit} margin-right="300px">
                <fieldset className="wrapper">
                    <label>
                    <EnterYourName>What's your full name?</EnterYourName>
                    <br></br>
                    <input type="text" value={name} required onChange={handleNameChange} />
                    </label>
                    <br></br>
                    <label>
                    <br></br>
                    <EnterYourName>Where are you located?</EnterYourName>
                    <br></br>
                    <input type="text" value={location} required onChange={handleLocationChange}  />
                    <br></br>
                    </label>
                    <br></br>
                    <label>
                    <EnterYourName>What issue are you concerned about?</EnterYourName>
                    <br></br>
                    <input type="text" value={issue} required onChange={handleIssueChange} />
                    <br></br>
                    </label>
                    <br></br>
                    <label>
                    <EnterYourName>What's your story?</EnterYourName>
                    <br></br>
                    <input type="text" value={story} required onChange={handleStoryChange} />
                    <br></br>
                    </label>
                    <label>
                    <EnterYourName>What facts would you like to include?</EnterYourName>
                    <br></br>
                    <input type="text" value={facts} required onChange={handleFactsChange} />
                    <br></br>
                    </label>
                    <input type="submit" value="Submit"/>
                </fieldset>
            </form>
        </div>

                <Image1
                    src={`https://file.rendit.io/n/GJC58eQ8WbxwKj2qd0ZW.svg`}
                />
                
                <Group5>
                <Text6>Personalize it!</Text6>
                <Paragraph3>
                    Just because it’s machine generated doesn’t mean it can’t be
                    unique to you — fill out these (optional) fields to put your own
                    personal touch on your email!
                </Paragraph3>
                <Text4>Have a personal story about the topic?</Text4>
                <Paragraph2>Any facts/statistics you want to include?</Paragraph2>
                <WhiteRectangle1
                    onClick={(e) => WhiteRectangle1Function(e, "WhiteRectangle1")}
                >
                    <Text2>
                    |
                    <EnterYourName>
                        Example: More than half the world’s tropical forests have
                        been destroyed since the 1960s.
                    </EnterYourName>
                    </Text2>
                </WhiteRectangle1>
                <WhiteRectangle
                    onClick={(e) => WhiteRectangleFunction(e, "WhiteRectangle")}
                >
                    <Text1>
                    |
                    <EnterYourName>
                        Example: When I was 13, my family used to go out to forests
                        to hike really often! My favourite thing to do was look at
                        the beautiful trees as we passed by. It makes me sad that if
                        deforestation continues, there will be so much less trees to
                        appreciate :(
                    </EnterYourName>
                    </Text1>
                </WhiteRectangle>
                </Group5>
            

        <OliveGreenRectangle
            onClick={(e) => OliveGreenRectangleFunction(e, "OliveGreenRectangle")}
        >
            <Text9>Generate!</Text9>
        </OliveGreenRectangle>
        <Group1>
            <Image5 src={`https://file.rendit.io/n/1bPayeoPwQoNopEHqihM.svg`} />
            <Image4 src={`https://file.rendit.io/n/WyNqefBmMPwfMlAjEUn4.svg`} />
            <Image3 src={`https://file.rendit.io/n/HQwtsgIiUq8nbtVZeOmZ.svg`} />
            <Image2 src={`https://file.rendit.io/n/oudRdg59ZsA3un5197zs.svg`} />
            <Text12>
            Made by Team AlgoGorls at ElleHacks
            <Paragraph5>
                <br />
                UI/UX Designer: Kelly Owenya
                <br />
                Front-End Developer: Anamta Masoodi
                <br />
                Back-End Developer: Cecelia Nydam
            </Paragraph5>
            </Text12>
            <Image1 src={`https://file.rendit.io/n/50xiCbEwHSkpnJk8czFj.png`} />
        </Group1>
        </div>
    );
};

const EnterYourName = styled.div`
    display: contents;
    color: rgba(0, 0, 0, 0.49);
    font-size: 25px;
    font-weight: 500;
    font-family: Montserrat;
`;
const Image1 = styled.img`
  min-width: 0px;
  min-height: 0px;
  position: relative;
  box-sizing: border-box;
`;

const Group = styled.div`
  width: 100%;
  position: relative;
  gap: 95px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: -65px 0px 61px -102px;
  box-sizing: border-box;
`;
const TimberwolfRectangle = styled.div`
  width: 1440px;
  height: 85px;
  left: 102px;
  top: 65px;
  position: absolute;
  gap: 60px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 14px 27px;
  box-sizing: border-box;
  background-color: #d9d9d9;
`;
const Text11 = styled.div`
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
const Text10 = styled.div`
  margin: 0px 0px 0px 1px;
  color: #ffffff;
  font-size: 20px;
  font-weight: 500;
  font-family: Montserrat;
  text-align: center;
  box-sizing: border-box;
`;
const Logo1 = styled.img`
  min-width: 0px;
  min-height: 0px;
  position: relative;
  margin: 0px 0px 0px 121px;
  box-sizing: border-box;
`;
const Text8 = styled.div`
  width: 893px;
  height: 203px;
  left: 375px;
  top: 150px;
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #96ac51;
  font-size: 68px;
  font-family: Unbounded;
  text-align: center;
  box-sizing: border-box;
`;
const Group2 = styled.div`
  width: 97.6%;
  position: relative;
  gap: 32px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  box-sizing: border-box;
`;
const Text7 = styled.div`
  width: 893px;
  height: 203px;
  left: 12px;
  top: 29px;
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #62bcbe;
  font-size: 25px;
  font-family: Unbounded;
  text-align: center;
  box-sizing: border-box;
`;
const Paragraph4 = styled.div`
    font-size: 25px;
    font-family: Montserrat;
    box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;
    margin-top: 175px;
    margin-bottom: 50px;
    text-align: center;
  
`;
const Group3 = styled.div`
  width: 100%;
  position: relative;
  gap: 129px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: stretch;
  align-items: flex-end;
  box-sizing: border-box;
`;
const Text6 = styled.div`
  width: 893px;
  height: 203px;
  left: 375px;
  top: 427px;
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #96ac51;
  font-size: 60px;
  font-family: Unbounded;
  text-align: center;
  box-sizing: border-box;
`;
const form = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: stretch;
  align-items: flex-start;
  padding: 0px 0px 0px 303px;
  box-sizing: border-box;
`;
const FormRectangle = styled.button`
  width: 312px;
  height: 51px;
  left: 303px;
  top: 110px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
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
const EnterYourName1 = styled.div`
  margin: 5px 83px 5px 5px;
  font-size: 18px;
  font-weight: 500;
  font-family: Montserrat;
  box-sizing: border-box;
`;
const Text5 = styled.div`
  width: 893px;
  height: 203px;
  left: 12px;
  top: 97px;
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #62bcbe;
  font-size: 25px;
  font-family: Unbounded;
  text-align: center;
  box-sizing: border-box;
`;
const WhiteRectangle3 = styled.button`
  width: 312px;
  height: 51px;
  left: 303px;
  top: 236px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
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
  margin: 0px 62px 0px 0px;
  font-size: 18px;
  font-weight: 500;
  font-family: Montserrat;
  box-sizing: border-box;
`;
const Text3 = styled.div`
  width: 918px;
  height: 209px;
  left: 0px;
  top: 215px;
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #62bcbe;
  font-size: 25px;
  font-family: Unbounded;
  text-align: center;
  box-sizing: border-box;
`;
const WhiteRectangle2 = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-end;
  align-items: flex-start;
  margin: 358px 0px 55px 0px;
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
const EnterTheIssue1 = styled.div`
  margin: 0px 99px 0px 0px;
  font-size: 18px;
  font-weight: 500;
  font-family: Montserrat;
  box-sizing: border-box;
`;
const Group5 = styled.div`
  width: 96.48%;
  position: relative;
  gap: 40px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  margin: 0px 11px 0px 0px;
  padding: 0px 38px;
  box-sizing: border-box;
`;
const Paragraph3 = styled.div`
  width: 994px;
  height: 60px;
  left: 261px;
  top: 0px;
  position: absolute;
  font-size: 25px;
  font-family: Montserrat;
  text-align: center;
  box-sizing: border-box;
`;
const Text4 = styled.div`
  width: 686px;
  height: 50px;
  left: 766px;
  top: 93px;
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #62bcbe;
  font-size: 25px;
  font-family: Unbounded;
  text-align: center;
  box-sizing: border-box;
`;
const Paragraph2 = styled.div`
  width: 918px;
  height: 209px;
  left: 0px;
  top: 13px;
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #62bcbe;
  font-size: 25px;
  font-family: Unbounded;
  text-align: center;
  box-sizing: border-box;
`;
const WhiteRectangle1 = styled.button`
  width: 47.07%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 156px 0px 0px 0px;
  padding: 0px;
  padding-top: 16px;
  padding-right: 22px;
  padding-bottom: 164px;
  padding-left: 22px;
  border-width: 0px;
  border-radius: 25px;
  border-style: solid;
  border-color: #003b30;
  box-sizing: content-box;
  background-color: #ffffff;
  cursor: pointer;
  &: hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  } ;
`;
const Text2 = styled.div`
  width: 100%;
  font-size: 18px;
  font-weight: 500;
  font-family: Montserrat;
  box-sizing: border-box;
`;
const WhiteRectangle = styled.button`
  width: 47.07%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  margin: 156px 0px 0px 0px;
  padding: 0px;
  padding-top: 16px;
  padding-right: 21px;
  padding-bottom: 98px;
  padding-left: 21px;
  border-width: 0px;
  border-radius: 25px;
  border-style: solid;
  border-color: #003b30;
  box-sizing: content-box;
  background-color: #ffffff;
  cursor: pointer;
  &: hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  } ;
`;
const Text1 = styled.div`
  width: 99.82%;
  font-size: 18px;
  font-weight: 500;
  font-family: Montserrat;
  box-sizing: border-box;
`;
const OliveGreenRectangle = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  margin: 0px 0px 0px 519px;
  padding: 0px;
  padding-top: 28px;
  padding-right: 101px;
  padding-bottom: 29px;
  padding-left: 101px;
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
const Text9 = styled.div`
  margin: 0px 0px 0px 0.8px;
  color: #ffffff;
  font-size: 40px;
  font-weight: 500;
  font-family: Montserrat;
  text-align: center;
  box-sizing: border-box;
`;
const Group1 = styled.div`
  width: 100.76%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-self: flex-end;
  align-items: flex-start;
  margin: 0px -10.83px -29px 0px;
  padding: 729px 599px 204px 599px;
  box-sizing: border-box;
`;
const Image5 = styled.img`
  width: 865px;
  min-width: 0px;
  height: 858px;
  min-height: 0px;
  left: 287px;
  top: 0px;
  position: absolute;
  box-sizing: border-box;
`;
const Image4 = styled.img`
  width: 1440px;
  min-width: 0px;
  height: 377px;
  min-height: 0px;
  left: 0px;
  top: 742px;
  position: absolute;
  box-sizing: border-box;
`;
const Image3 = styled.img`
  width: 960px;
  min-width: 0px;
  height: 540px;
  min-height: 0px;
  left: 2px;
  top: 607px;
  position: absolute;
  box-sizing: border-box;
`;
const Image2 = styled.img`
  width: 960px;
  min-width: 0px;
  height: 540px;
  min-height: 0px;
  left: 491px;
  top: 607px;
  position: absolute;
  box-sizing: border-box;
`;
const Text12 = styled.div`
  width: 502px;
  height: 320px;
  left: 469px;
  top: 806px;
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-weight: 600;
  font-family: Montserrat;
  text-align: center;
  box-sizing: border-box;
`;
const Paragraph5 = styled.div`
  display: contents;
  font-size: 25px;
  font-weight: 400;
  font-family: Montserrat;
`;

export default GenerationPage
