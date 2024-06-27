import { useState } from "react";
import styles from '../../css/welcomeuserinput.module.css';
import shared from '../../css/header.module.css';

export default function MyUseState()
{
    const [name, setName] = useState("");
    return(
        <div>
            <h1 className={shared.header}>UseState</h1>
            <div className={shared.basic}>
                <div>Welcome to React, <span className={styles.name}>{name}</span>!</div>
                <input type="text" onChange={(e) => setName(e.target.value)}></input>
            </div>
        </div>
    );
}