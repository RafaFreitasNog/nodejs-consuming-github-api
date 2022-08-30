const express = require('express')
const axios = require('axios')

const app = express()

app.listen('3000')

app.route('/').get((req, res) => {
    res.send('Rota Padrão')
})

app.route('/user').get((req, res) => {
    axios.get('https://api.github.com/users/rafafreitasnog')
    .then(result => res.send(result.data))
    .catch(error => console.log(error))
})

app.route('/user/avatar').get((req, res) => {
    axios.get('https://api.github.com/users/rafafreitasnog')
    .then(result => res.send(`<img src= "${result.data.avatar_url}" />`))
    .catch(error => console.log(error))
})
