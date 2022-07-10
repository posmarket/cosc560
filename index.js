const express = require('express')
const mysql = require('mysql2/promise')

const app = express()

let db
console.log(1)

async function startDb() {
    db = await mysql.createConnection({
        host: '127.0.0.1',
        port: 3306,
        user: 'root',
        password: 'example',
        database: 'pets' 
    })
    app.listen(3000)
}

startDb()
console.log(2)

app.get('/', async (req, res) => {
    console.log(3)
    const [users] = await db.execute('SELECT * FROM users')
    console.log(4)
    console.log(users)
    res.send(`<ul>${users.map(animal => `<li>${animal.name}</li>`).join('')}</ul>`)
})