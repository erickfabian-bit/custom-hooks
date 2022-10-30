import { useEffect, useReducer } from "react";
import { todoReducer } from "../todoReducer";

const initialState = [
    
];
const init = () => {
    return JSON.parse( localStorage.getItem('todos') ) || [];
};

export const useTodo = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState, init)

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    const handleRemoveTodo = ( id ) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id 
        });
    };
    const handleNewTodo = ( todo ) => {
        const action = {
          type: '[TODO] Add Todo',
          payload: todo  
        };
        dispatch(action);
    };
    const handleToggleTodo = ( id ) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id 
        });
    };

    // const todosCount = todos.length;
    // const pendingTodoscount = todos.filter( todo => !todo.done ).length;

    return {
        todos,
        todosCount: todos.length,
        pendingTodoscount: todos.filter( todo => !todo.done ).length,
        handleNewTodo,
        handleRemoveTodo,
        handleToggleTodo
    }
}
