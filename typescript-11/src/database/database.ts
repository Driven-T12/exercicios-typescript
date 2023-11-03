import pg from "pg";

const { Pool } = pg;

const db = new Pool({
    host: "localhost",
    port: 5432,
    user: "postgres", // seu user
    password: "123456", // sua senha
    database: "ex11"
})

export { db };