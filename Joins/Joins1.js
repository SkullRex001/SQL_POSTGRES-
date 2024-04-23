import { getClient } from "../utils.js";

//get the email of the user and all their todos

//without joins :- Two query will be sent , one to the todos table and other to the user table



const getUserData = async (userId)=>{
    const client = await getClient()



    const userQuery = 'SELECT * FROM users WHERE id=$1'
    const userRes = await client.query(userQuery , [userId])

    const user = userRes.rows[0]

    const todosQuery = 'SELECT * FROM todos WHERE id = $1'

    const todosRes = await client.query(todosQuery , [userId])

    const todos = todosRes.rows;

    console.log("User Details :" , user)

    console.log("Todos :" , todos)
}

getUserData(1)


//with joints  :-get all the data in single query

const getUserDataByjoints = async (userId)=>{
    const client = await getClient()

    const joinQurey = `
    SELECT users.*  , todos.title , todos.description , todos.done
    FROM users LEFT JOIN todos 
    ON users.id = todos.user_id
    WHERE users.id = $1`

    const res = await client.query(joinQurey , [userId])

    console.log('Result' , res.rows)
}



getUserDataByjoints(1)

// SELECT users.*  , todos.title , todos.description , todos.done
// FROM users LEFT JOIN todos  --> join users and todos table
// ON users.id = todos.user_id --> condition to join them
// WHERE users.id = $1`  --> for which user


// LEFT JOIN make sure that even there is no todo in the table for a user , user is not left , it's title , description will be empty , but we will get user. Without LEFT JOIN user will not make  it to the final joined table

//Type of joints 

//FULLJOIN -> should be presesnt in either tables
// INNERJOIN -> should be presnet in both the table (= JOIN)
// LEFTJOIN -> should have all entries from left table
//RIGHTJOIN -> !LEFTJOIN