import pg from "pg";

export const getClient = async () => {
    const client = new pg.Client("postgres://aditya:aditya@localhost:5432/aditya");

    await client.connect();
    return client;
}


//postgres url : "postgres://YourUserName:YourPassword@YourHostname:5432/YourDatabaseName";