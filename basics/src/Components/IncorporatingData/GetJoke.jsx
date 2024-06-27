import React, { useEffect, useState } from "react";
import styles from '../../css/header.module.css';

function JokeCall()
{
    const [data, setData] = useState();

    useEffect(() => {
        fetch(`https://icanhazdadjoke.com/`, {
            headers:{
            'Accept': 'application/json'
        }
    }).then((response) => response.json())
        .then((result) => setData(result))
        .catch((error) => console.error(error));
    },[]);//The [] ensures that the call is only made once

    if(data)
    {
        return data.joke;
    }
    else
    {
        return null;
    }
}

export default function GetJoke()
{
    return(<div>
        <h1 className={styles.header}>Get the Joke</h1>
        <div className={styles.basic}>
        {JokeCall()}
        </div>        
    </div>);
}