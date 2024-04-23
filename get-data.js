import { getClient } from "./utils.js";

const getUser = async ()=>{

    const client = await getClient()

    const selectUsersText = 'SELECT email, id FROM users';

    const userRes = await client.query(selectUsersText)

    console.log("Users:");

    for(let user of userRes.rows){
        console.log(`ID: ${user.id} , Email : ${user.email}`)
    }

}

getUser()


const getUserFromEmail = async (email)=>{

    const client = await getClient()

    const selectUserText = 'SELECT * FROM users WHERE email = $1'

    const userRes = await client.query(selectUserText , [email])

    console.log("Single User Details")

    console.log("userRes :---->" , userRes)

    for(let user of userRes.rows){

        console.log(`ID : ${user.id} , Email: ${user.email}`)

    }

}

getUserFromEmail("aditya@gmailr12.com")


const getTodosFromUsers = async (user_id)=>{

    const client = await getClient()

    const selectUserText = 'SELECT * FROM users WHERE user_id = $1'

    const userRes = await client.query(selectUserText , [user_id])

    console.log("Single User Details")

    for(let user of userRes.rows){

        console.log(`ID : ${user.id} , Email: ${user.email}`)

    }

}


getTodosFromUsers(1)


const getTodosForUsers = async (userId) =>{
    const client = await getClient()
    const selectTodosText = 'SELECT * FROM todos WHERE id=$1'

    const todoRes = await client.query(selectTodosText , [userId])

    console.log(`Todos for User Id ${userId}:`)



    for(let todo of todoRes.rows){
        console.log(`Id ${todo.id} , Title : ${todo.title} , Description : ${todo.description} , Done: ${todo.done}`)
    }
}


getTodosForUsers(1)


