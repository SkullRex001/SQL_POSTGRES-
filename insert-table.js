import { getClient } from "./utils.js";

const createEntries = async ()=>{
    const client = await getClient();
    const insertUserText = `INSERT INTO users (email , password) VALUES ($1, $2) RETURNING id`;
    const userValues = ['aditya@gmaidslr1d23.com' , 'baban@gmail.com']

  

    //value is not directly inserted but using ($1 , $2) is to prevent sql injection

    const response = await client.query(insertUserText , userValues);


    const insertTodoText = 'INSERT INTO todos (title, description , user_id) VALUES ($1, $2 , $3) RETURNING id'

    // console.log(response)

    const todoValues = ['Go To Gym' , 'I Will go to gym and make six pack abs', response.rows[0].id];

    await client.query(insertTodoText , todoValues)

    console.log("Entries Created")
}

createEntries()