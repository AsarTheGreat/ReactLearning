import styles from '../css/todoitem.module.css'

//Need to pass setTodos in order to perform the deletion method
export function TodoItems({item, todos, setTodos})
{
    function handleDelete(i)
    {
        console.log("Delete button clicked:",i);

        //filter the existing todos list and remove item of the one clicked
        setTodos(todos.filter((t) => t !== i));
    }

    function handleClick(i)
    {
        console.log("Clicked item", i);
        const newT = todos.map((t) => t.name === i.name ? {name: i.name, done: !i.done} : t);
        setTodos(newT);
        console.log(newT);
    }

    const strikeOutCSS = item.done ? styles.completed : "";

    return(
    <div className={styles.item}>
        <div className={styles.itemName}>
            <li id={item}>
            <span className={strikeOutCSS} onClick={() => handleClick(item)}>{item.name}</span>
                <span><button onClick={() => handleDelete(item)} className={styles.deleteButton}>X</button></span>
            </li>
        </div>
        <hr className={styles.line} />
    </div>
    );
}