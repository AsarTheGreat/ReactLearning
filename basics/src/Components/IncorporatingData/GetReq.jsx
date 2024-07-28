import React, { useEffect, useState } from "react";
import styles from '../../css/header.module.css';

/*
This component makes a call to the Github API to retrieve information
about the use passed as login. In this case, that user is "moonhighway".

Go to "https://api.github.com/users/moonhighway" in your browser. You will see
results on your screen. We capture the "avatar_url" and entire response and display
in the React app.

 */
function GetUser({login})
{
    const [data, setData] = useState();

    useEffect(() => {
        fetch(`https://api.github.com/users/${login}`) //call github api
        .then(response => response.json()) //capture the response
        .then((result) => setData(result))
        .catch((error) => console.error(error));
    }, [login]);

    if(data)
    {
        /*
        Display the entire response.
        Display the avatar_url.
         */
        return <div><div>{JSON.stringify(data, null, 2)}</div><img src={data.avatar_url} alt={data.login}></img></div>;
    }
    else
    {
        return null;
    }
}

export default function GetReq()
{
    return(
        <div>
            <h1 className={styles.header}>Github API Call</h1>
            <div className={styles.basic}>
                {/* Pass "moonhighway" as the login parameter */}
                <GetUser login="moonhighway"></GetUser>
            </div>
        </div>
    );
}