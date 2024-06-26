import {TodoItems} from "./TodoItems";
//why are the {} needed here
import styles from '../css/todolist.module.css'

export default function TodoList({todos, setTodos})
{
    //Another method of sorting
    //Needed to use it in the map method for showing the list
    const sortedTodos = todos.slice().sort((a,b) => Number(a.done)- Number(b.done));
    console.log(sortedTodos);

    //Need to pass setTodos in order to perform the deletion method
    return (
    <div className={styles.list}>{sortedTodos.map(item => <TodoItems key={item.name} item={item} todos={todos} setTodos={setTodos}></TodoItems>)}</div>
    );
}