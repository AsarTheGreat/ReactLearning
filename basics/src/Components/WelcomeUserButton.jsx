import { useState } from "react";

export default function WelcomeUserButton()
{
    const [name, setName] = useState("");

    function handleButton(e)
    {
        e.PreventDefault;
        alert(name);
    }

    return(<div>
        <input type="text" onChange={(e) => setName(e.target.value)}></input>
        <input type="button" value="Welcome" onClick={(e) => handleButton(e)}></input>
    </div>);
}