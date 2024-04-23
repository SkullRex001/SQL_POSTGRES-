import { getClient } from "./utils.js";

const deleteTodo = async (todoId)=>{
    const client = await getClient()

    const deleteTodoText = 'DELETE FROM todos WHERE id=$1'

    await client.query(deleteTodoText , [todoId])

    console.log(`Todo with ID ${todoId} deleted!`)
}

deleteTodo(2)