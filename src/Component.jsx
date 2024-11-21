import  { useState } from 'react'
const Component = () => {
    const[message, setMessage] = useState("");

    return (
        <div>
            <h1> Name: Bermet Iskenderova</h1>
            <p> Position: Developer </p>
            <p>Company: development.kg</p>
            <p> Age: 19 Years old </p>
            <p> Location: Bishkek city /Kyrgyzstan </p>
            <p>Email: iskenderova.bermet19@gmail.com</p>
            {message &&  <p>{message}</p>}
            <button onClick={()=> setMessage ("Employee Information Displayed!" )}>Get Employee Information</button>
        </div>
    );
};

export default Component;
