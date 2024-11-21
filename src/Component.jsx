import  { useState } from 'react'
const Component = () => {
    const [position, setPosition] = useState("Software Developer");

    return (
        <div>
            <h1> Name: Bermet Iskenderova</h1>
            <p> Position: {position} </p>
            <p>Company: development.kg</p>
            <p> Age: 19 Years old </p>
            <p> Location: Bishkek city /Kyrgyzstan </p>
            <p>Email: iskenderova.bermet19@gmail.com</p>
            <button 
            onClick ={()=> setPosition("Senior Software Developer ")}>Promote Employee</button>
        </div>
    );
};

export default Component;
