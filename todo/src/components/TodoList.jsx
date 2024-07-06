import {TodoItems} from "./TodoItems";
import styles from '../css/todolist.module.css'

export default function TodoList({todos, setTodos})
{
    //Another method of sorting
    //Needed to use it in the map method for showing the list
    const sortedTodos = todos.filter((t) => !t.done).concat(todos.filter((t) => t.done));
    console.log(sortedTodos);

    //Need to pass setTodos in order to perform the deletion method
    return (
    <div className={styles.list}>{sortedTodos.map(item => <TodoItems key={item.name} item={item} todos={todos} setTodos={setTodos}></TodoItems>)}</div>
    );
}
