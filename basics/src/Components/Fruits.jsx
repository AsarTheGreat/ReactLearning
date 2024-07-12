import Fruit from "./Fruit";

export default function Fruits()
{
    const fruitsList = [
        {id:1, name:"apple", count:10},
        {id:2, name:"grapes", count:15}
    ];

    return(<div>
        My Fruits Component
        <div>{fruitsList.map((f) => <Fruit id={f.id} name={f.name} count={f.count}></Fruit>)}</div>
        {/* <div>{fruitsList.map((f) => <li>{f.id} {f.name} {f.count}</li>)}</div> */}
    </div>);
}