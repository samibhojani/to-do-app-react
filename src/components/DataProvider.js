import React, {useState, useEffect, createContext} from 'react'

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [todos, setTodos] = useState([])

    useEffect (() => {
        console.log("1ST")
        const todoStore = JSON.parse(localStorage.getItem('todoStore'))
        if(todoStore) setTodos(todoStore)
    },[])
    
    useEffect(() => {
        console.log("SECOND")
       if(todos.length)localStorage.setItem('todoStore', JSON.stringify(todos))
    },[todos])


  return (
        <DataContext.Provider value={[todos, setTodos]}>
            {props.children}
        </DataContext.Provider>
    )
}
