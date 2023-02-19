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