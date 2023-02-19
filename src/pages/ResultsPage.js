<<<<<<< HEAD
import React, {useEffect, useState} from "react";

function ResultsPage() {
    
    const [message, setMessage] = useState('');
    useEffect(() => {
        fetch("http://127.0.0.1:5000/",{
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
        })
        .then(response => response.json())
        .then(data => setMessage(data.message));
        console.log(setMessage);
    }, []);

    function NewlineText(props) {
      const text = props.text;
      return text.split('\n').map(str => <p>{str}</p>);
    }

  return (
    <div>
      <NewlineText text={message}/>
    </div>
  );
}

export default ResultsPage;
=======
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./Header";


const ResultsPage = ({}) => {

    return (
        <div>
        <Header>
        </Header>
        </div>
    );

};


export default ResultsPage

            
          
>>>>>>> dae30c317b66a29bcd63cad58ba4873cc6c067ce
