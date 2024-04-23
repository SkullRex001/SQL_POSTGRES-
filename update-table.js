import { getClient } from "./utils.js";

const updateTodo = async (todoId)=>{

    const client = await getClient()

    const updateTodoText = 'UPDATE todos SET done = $1 WHERE id = $2'

    await client.query(updateTodoText , [true , 1])

    console.log(`Todo with ID ${todoId} updated Todo`)

}

updateTodo(1)