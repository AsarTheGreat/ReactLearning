import React, { useEffect, useState } from "react";
import styles from '../../css/header.module.css';

function GetUser({login})
{
    const [data, setData] = useState();

    useEffect(() => {
        fetch(`https://api.github.com/users/${login}`)
        .then(response => response.json())
        .then((result) => setData(result))
        .catch((error) => console.error(error));
    }, [login]);

    if(data)
    {
        return <div><div>{JSON.stringify(data, null, 2)}</div><img src={data.avatar_url} alt={data.login}></img></div>;
        //return <pre>{JSON.stringify(data, null, 2)}</pre>;
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
                <GetUser login="moonhighway"></GetUser>
            </div>
        </div>
    );
}